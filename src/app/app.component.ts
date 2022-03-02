import { TvShowsService } from './services/tv-shows.service';
import { Movies } from './models/movies';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from './services/movies.service';
import { TvShows } from './models/tv-shows';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  topRatedMovies: Movies;
  topRatedTvShows: TvShows;

  constructor(private movieService: MoviesService, private tvShowService: TvShowsService) { }

  ngOnInit(): void {
    this.subs.push(this.movieService.getTopRatedMovies().subscribe(data => this.topRatedMovies = data));
    this.subs.push(this.tvShowService.getTopRatedTvShows().subscribe(data => this.topRatedTvShows = data));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

}
