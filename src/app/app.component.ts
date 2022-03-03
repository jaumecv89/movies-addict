import { ApiResponse } from './models/api-response';
import { Movie } from './models/movie';
import { HttpService } from './services/http.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TvShow } from './models/tv-show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  topRatedMovies: Array<Movie>;
  topRatedTvShows: Array<TvShow>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.subs.push(this.httpService.getTopRatedMovies().subscribe((moviesList: ApiResponse<Movie>) => {
      this.topRatedMovies = moviesList.results;
    }));
    this.subs.push(this.httpService.getTopRatedTvShows().subscribe((tvList: ApiResponse<TvShow>) => {
      this.topRatedTvShows = tvList.results;
    }));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

}
