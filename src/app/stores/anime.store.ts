import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface AnimeState {
   animes: Anime[];
   selected: Anime;
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

export function createInitialState(): AnimeState {
  return {
    animes: [],
    selected: null
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
