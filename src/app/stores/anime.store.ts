import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface AnimeState {
   animes: Anime[];
   selected: Anime;
   evidenza: Anime[];
   suggeriti: Anime[];
   casual: Anime[];
   filter: Filtered;
}
export interface Filtered {
  ordine: number;
  search: string;
  filteredList: Anime[];
}
export interface Anime {
    id: any;
    name: string;
    clean: string;
    episodi: Episodi[];
    image: string;
    date: Date;
}
export interface Episodi {
    url: string;
    name: string;
}
export function createInitialFilter(): Filtered {
  return {
    ordine: 1,
    search: '',
    filteredList: []
  };
}

export function createInitialState(): AnimeState {
  return {
    animes: [],
    selected: null,
    evidenza: [],
    suggeriti: [],
    casual: [],
    filter: createInitialFilter()
  };
}
@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'anime' })
export default class AnimeStore extends Store<AnimeState> {
  constructor() {
    super(createInitialState());
  }
}
