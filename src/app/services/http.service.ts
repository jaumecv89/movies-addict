import { TvShowDetails } from './../models/tv-show-details';
import { MovieDetails } from './../models/movie-details';
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

  // Movies endpoint is not working atm. Instead I've used random similar movies.
  getTopRatedMovies(): Observable<ApiResponse<Movie>> {
    return this.http.get<ApiResponse<Movie>>(`${env.BASE_URL}/movie/550/similar`, {
      params: {
        api_key: env.API_KEY
      }
    });
  }

  getSimilarMovies(id: string): Observable<ApiResponse<Movie>> {
    return this.http.get<ApiResponse<Movie>>(`${env.BASE_URL}/movie/${id}/similar`, {
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

  getSimilarTvShows(id: string): Observable<ApiResponse<TvShow>> {
    return this.http.get<ApiResponse<TvShow>>(`${env.BASE_URL}/tv/${id}/similar`, {
      params: {
        api_key: env.API_KEY
      }
    });
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${env.BASE_URL}/movie/${id}`, {
      params: {
        api_key: env.API_KEY
      }
    });
  }

  getTvShowDetails(id: string): Observable<TvShowDetails> {
    return this.http.get<TvShowDetails>(`${env.BASE_URL}/tv/${id}`, {
      params: {
        api_key: env.API_KEY
      }
    });
  }

}
