import { Query } from '@datorama/akita';
import AnimeStore, { AnimeState } from './anime.store';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export default class AnimeQuery extends Query<AnimeState> {
    selectAnimes$ = this.select('animes');
    constructor(protected animeStore: AnimeStore) {
        super(animeStore);
    }
}
