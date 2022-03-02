import { Globals } from './../globals';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getTopRatedMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${Globals.baseUrl}${Globals.moviesTopRatedEndpoint}`, {
      params: {
        api_key: Globals.apiKey
      }
    });
  }

}
