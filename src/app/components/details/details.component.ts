import { TvShowDetails } from './../../models/tv-show-details';
import { MovieDetails } from './../../models/movie-details';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
  tvShowDetails: TvShowDetails;

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
    } else {
      this.subs.push(this.httpService.getTvShowDetails(id).subscribe((tvShowDetails: TvShowDetails) => {
        this.tvShowDetails = tvShowDetails;
      }));
    }
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

}
