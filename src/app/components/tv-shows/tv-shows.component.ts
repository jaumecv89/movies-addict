import { Component, OnDestroy, OnInit } from '@angular/core';
import { TvShow } from 'src/app/models/tv-show';
import { HttpService } from 'src/app/services/http.service';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  userIndex = 0;
  topRatedTvShows: Array<TvShow>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.subs.push(this.httpService.getTopRatedTvShows().subscribe((tvList: ApiResponse<TvShow>) => {
      this.topRatedTvShows = tvList.results;
    }));
  }

  nextArrowPressed() {
    this.userIndex == this.topRatedTvShows.length - 1 ? this.userIndex = 0 : this.userIndex++;
  }

  previousArrowPressed() {
    this.userIndex == 0 ? this.userIndex = this.topRatedTvShows.length - 1 : this.userIndex--;
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

}
