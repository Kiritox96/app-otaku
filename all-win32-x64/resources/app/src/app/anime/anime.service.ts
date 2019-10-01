import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import AnimeStore, { Anime } from '../stores/anime.store';
import { Observable } from 'rxjs';

@Injectable()
export class AnimeService {
    animeApi: string ;
    constructor(private http: HttpClient) { }


    getAllAnimes(): Observable<Anime[]> {
        this.animeApi = 'http://otaku-world.space/anime';
        return this.http.get<Anime[]>(this.animeApi);
    }

}
