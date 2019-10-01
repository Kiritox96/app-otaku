import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface State {
   dashboard: boolean;
   anime: boolean;
   manga: boolean;
}


export function createInitialState(): State {
  return {
    dashboard: true,
    anime: false,
    manga: false
  };
}
@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'state' })
export default class StateStore extends Store<State> {
  constructor() {
    super(createInitialState());
  }

}
