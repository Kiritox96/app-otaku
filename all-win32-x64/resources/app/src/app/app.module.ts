import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AnimeService } from './anime/anime.service';
import { AppService } from './app.service';
import AnimeStore from './stores/anime.store';
import StateStore from './stores/state.store';
import AnimeQuery from './stores/anime.query';
import StateQuery from './stores/state.query';
@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [
    AnimeService,
    AppService,
    AnimeStore,
    StateStore,
    AnimeQuery,
    StateQuery
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
