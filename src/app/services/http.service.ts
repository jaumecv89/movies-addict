import { TvShow } from '../models/tv-show';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment as env } from 'src/environments/environment';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getTopRatedMovies(): Observable<ApiResponse<Movie>> {
    return this.http.get<ApiResponse<Movie>>(`${env.BASE_URL}/movies/top_rated`, {
      params: {
        api_key: env.API_KEY
      }
    });
  }
  getTopRatedTvShows(): Observable<ApiResponse<TvShow>> {
    return this.http.get<ApiResponse<TvShow>>(`${env.BASE_URL}/tv/top_rated`, {
      params: {
        api_key: env.API_KEY
      }
    });
  }

}
