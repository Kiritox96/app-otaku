import { Query } from '@datorama/akita';
import AnimeStore, { AnimeState } from './anime.store';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export default class AnimeQuery extends Query<AnimeState> {
    selectAnimes$ = this.select('animes');
    selectSelected$ = this.select('selected');
    selectEvidenzaAnimes$ = this.select('evidenza');
    selectSuggeritiAnimes$ = this.select('suggeriti');
    selectFilter$ = this.select('filter');
    selectCasual$ = this.select('casual');
    constructor(protected animeStore: AnimeStore) {
        super(animeStore);
    }
}
