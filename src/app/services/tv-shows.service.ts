import { Globals } from './../globals';
import { TvShows } from './../models/tv-shows';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(private http: HttpClient) { }

  getTopRatedTvShows(): Observable<TvShows> {
    return this.http.get<TvShows>(`${Globals.baseUrl}${Globals.tvTopRatedEndpoint}`, {
      params: {
        api_key: Globals.apiKey
      }
    });
  }

}
