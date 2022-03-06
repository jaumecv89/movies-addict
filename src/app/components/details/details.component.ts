import { TvShowDetails } from './../../models/tv-show-details';
import { MovieDetails } from './../../models/movie-details';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { ApiResponse } from 'src/app/models/api-response';
import { TvShow } from 'src/app/models/tv-show';

const MOVIE = 'movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;
  type: string;
  subs: Subscription[] = [];
  movieDetails: MovieDetails;
  similarMovies: Array<Movie>;
  tvShowDetails: TvShowDetails;
  similarTvShows: Array<TvShow>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.subs.push(this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.type = params['type'];
      this.getDetails(this.id, this.type);
    }))
  }

  getDetails(id: string, type: string): void {
    if (type == MOVIE) {
      this.subs.push(this.httpService.getMovieDetails(id).subscribe((movieDetails: MovieDetails) => {
        this.movieDetails = movieDetails;
      }));
      this.subs.push(this.httpService.getSimilarMovies(id).subscribe((moviesList: ApiResponse<Movie>) => {
        this.similarMovies = moviesList.results;
      }));
    } else {
      this.subs.push(this.httpService.getTvShowDetails(id).subscribe((tvShowDetails: TvShowDetails) => {
        this.tvShowDetails = tvShowDetails;
      }));
      this.subs.push(this.httpService.getSimilarTvShows(id).subscribe((tvShowsList: ApiResponse<TvShow>) => {
        this.similarTvShows = tvShowsList.results;
      }));
    }
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

}
