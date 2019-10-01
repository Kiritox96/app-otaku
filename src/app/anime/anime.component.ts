import { Component, OnInit } from '@angular/core';
import * as mongoose from 'mongoose';
import { AnimeService } from './anime.service';
import AnimeStore, { Anime } from '../stores/anime.store';
import { Observable } from 'rxjs';
import AnimeQuery from '../stores/anime.query';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {
  animes: Observable<Anime[]>;
  constructor(private animeQuery: AnimeQuery) { }

  ngOnInit() {
    this.animes = this.animeQuery.selectAnimes$;
  }


}
