import { Component, OnInit } from '@angular/core';
import AnimeStore, { Anime, Filtered } from '../stores/anime.store';
import { Observable } from 'rxjs';
import AnimeQuery from '../stores/anime.query';
import StateStore from '../stores/state.store';
import StateQuery from '../stores/state.query';
import * as array from '../utility/array';
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
  casual: Observable<Anime[]>;

  all: Observable<boolean>;
  generi: string[];
  ordini: string[];

  filter: Observable<Filtered>;

  slideIndex = 1;

  constructor(
    private animeQuery: AnimeQuery,
    private animeStore: AnimeStore,
    private stateStore: StateStore,
    private stateQuery: StateQuery
  ) { }

  ngOnInit() {

    this.filter = this.animeQuery.selectFilter$;

    this.ordini = array.ordini;

    this.animes = this.animeQuery.selectAnimes$; // all anime

    this.casual = this.animeQuery.selectCasual$; // slider

    this.selected = this.animeQuery.selectSelected$;
    this.evidenza = this.animeQuery.selectEvidenzaAnimes$;
    this.suggeriti = this.animeQuery.selectSuggeritiAnimes$;
    this.all = this.stateQuery.selectAll$;

    this.showSlides(1);

  }
  allAnimes() {
    this.stateStore.update({ all: true });
  }
  selectAnime(anime: Anime) {
    this.animeStore.update({ selected: anime });
  }

  plusSlides(n) {
    this.slideIndex += n;
    this.showSlides(this.slideIndex);
  }


  showSlides(n) {
    if (n > 3) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = 3;
    }
  }

  setOrdine(i: number) {
    let s: string;
    let l: Anime[];
    this.filter.subscribe(val => {
      s = val.search;
      l = val.filteredList;
      if (i === 0) {
        l.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
      } else if (i === 1) {
        l.sort((b, a) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
      } else if ( i === 2) {

      } else if ( i === 3 ) {

      }
      console.log(l);
    });
    this.animeStore.update({ filter: {
      search: s,
      ordine: i,
      filteredList: l,
    }});
  }

}
