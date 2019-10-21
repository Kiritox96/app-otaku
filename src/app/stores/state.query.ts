import { Query } from '@datorama/akita';
import StateStore, { State } from './state.store';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export default class StateQuery extends Query<State> {
    selectDashboard$ = this.select('dashboard');
    selectAnime$ = this.select('anime');
    selectManga$ = this.select('manga');
    selectEvidenza$ = this.select('evidenza');
    selectSuggeriti$ = this.select('suggeriti');
    constructor(protected stateStore: StateStore) {
        super(stateStore);
    }
}
