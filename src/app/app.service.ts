import { Injectable } from '@angular/core';
import StateStore from './stores/state.store';

@Injectable()
export class AppService {
    constructor(private stateStore: StateStore) { }
    seeAnime() {
        this.stateStore.update({ dashboard: false, anime: true, manga: false });
    }
    seeDashboard() {
        this.stateStore.update({ dashboard: true, anime: false, manga: false });
    }
    seeManga() {
        this.stateStore.update({ dashboard: false, anime: false, manga: true });

    }


}
