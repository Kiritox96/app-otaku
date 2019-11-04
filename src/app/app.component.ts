import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { AnimeService } from './anime/anime.service';
import AnimeStore, { Anime } from './stores/anime.store';
import { Observable } from 'rxjs';
import StateQuery from './stores/state.query';
import AnimeQuery from './stores/anime.query';
import * as array from './utility/array';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dashboard: Observable<boolean>;
  anime: Observable<boolean>;
  manga: Observable<boolean>;
  animesLength: number;
  data: any;
  listEvidenza: Anime[];
  evidenza: string[];
  suggeriti: string[];


  constructor(
    private animeQuery: AnimeQuery,
    private stateQuery: StateQuery,
    private animeService: AnimeService,
    private animeStore: AnimeStore,
    private appService: AppService) {
    this.data = {
      labels: ['Anime', 'Manga'],
      datasets: [{
        data: [this.animesLength, 0],
        backroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB']
      }]
    };
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.getData();
    this.dashboard = this.stateQuery.selectDashboard$;
    this.anime = this.stateQuery.selectAnime$;
    this.manga = this.stateQuery.selectManga$;
    this.animeQuery.selectAnimes$.subscribe(val => this.animesLength = val.length);

  }

  getData() {
    this.animeService.getAllAnimesEvidenza().subscribe(list => {
      this.evidenza = list;
    });
    this.animeService.getAllAnimesSuggeriti().subscribe(list => {
      this.suggeriti = list;
    });
    this.animeService.getAllAnimes().subscribe(list => {
      this.animeStore.update({ animes: list });
      this.animeStore.update({ evidenza: list.filter(anime => this.evidenza.includes(anime.clean)) });
      this.animeStore.update({ suggeriti: list.filter(anime => this.suggeriti.includes(anime.clean)) });
      const num = this.genRandom();
      const randList = list.slice(num, num + 9);
      this.animeStore.update({ casual: randList});
    });


  }
  genRandom() {
    return Math.random() * (200 - 50) + 50;
  }
}

