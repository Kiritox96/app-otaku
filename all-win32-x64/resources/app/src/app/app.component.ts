import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { AnimeService } from './anime/anime.service';
import AnimeStore, { Anime } from './stores/anime.store';
import { Observable } from 'rxjs';
import StateQuery from './stores/state.query';
import AnimeQuery from './stores/anime.query';

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
    this.animeService.getAllAnimes().subscribe(val =>
      this.animeStore.update({ animes: val })
    );
  }
  clickAnime() {
    this.appService.seeAnime();
  }
  clickManga() {
    this.appService.seeManga();
  }
}
