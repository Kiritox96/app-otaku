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
  suggeriti: Observable<Anime[]>;
  viewEvidenza: Observable<boolean>;
  viewSuggeriti: Observable<boolean>;

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
    this.viewSuggeriti = this.stateQuery.selectSuggeriti$;
    this.evidenza = this.animeQuery.selectEvidenzaAnimes$;
    this.suggeriti = this.animeQuery.selectSuggeritiAnimes$;
  }
  clickEvidenza() {
    let click = false;
    this.viewEvidenza.subscribe(ev => {
      click = !ev;
    });
    this.stateStore.update({ evidenza: click , suggeriti: false});
  }
  clickSuggeriti() {
    let click = false;
    this.viewSuggeriti.subscribe(ev => {
      click = !ev;
    });
    this.stateStore.update({ suggeriti: click , evidenza: false});
  }
  selectAnime(anime: Anime) {
    this.animeStore.update({ selected: anime });
  }

}
