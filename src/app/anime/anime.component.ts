import { Component, OnInit } from '@angular/core';
import * as mongoose from 'mongoose';
import { AnimeService } from './anime.service';
import AnimeStore, { Anime } from '../stores/anime.store';
import { Observable } from 'rxjs';
import AnimeQuery from '../stores/anime.query';
import StateStore from '../stores/state.store';
import StateQuery from '../stores/state.query';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {
  animes: Observable<Anime[]>;
  selected: Observable<Anime>;
  evidenza: Observable<Anime[]>;
  viewEvidenza: Observable<boolean>;

  constructor(
    private animeQuery: AnimeQuery,
    private animeStore: AnimeStore,
    private stateStore: StateStore,
    private stateQuery: StateQuery
  ) { }

  ngOnInit() {
    this.animes = this.animeQuery.selectAnimes$;
    this.selected = this.animeQuery.selectSelected$;
    this.viewEvidenza = this.stateQuery.selectEvidenza$;
    this.evidenza = this.animeQuery.selectEvidenzaAnimes$;
  }
  clickEvidenza() {
    let click = false;
    this.viewEvidenza.subscribe(ev => {
      click = !ev;
    });
    this.stateStore.update({ evidenza: click });
  }
  selectAnime(anime: Anime) {
    this.animeStore.update({ selected: anime });
  }

}
