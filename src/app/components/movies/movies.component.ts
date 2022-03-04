import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  
  subs: Subscription[] = [];
  userIndex = 0;
  topRatedMovies: Array<Movie>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.subs.push(this.httpService.getTopRatedMovies().subscribe((moviesList: ApiResponse<Movie>) => {
      this.topRatedMovies = moviesList.results;
    }));
  }

  nextArrowPressed() {
    this.userIndex == this.topRatedMovies.length - 1 ? this.userIndex = 0 : this.userIndex++;
  }

  previousArrowPressed() {
    this.userIndex == 0 ? this.userIndex = this.topRatedMovies.length - 1 : this.userIndex--;
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

}
