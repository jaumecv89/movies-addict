import { Component, Input, OnInit } from '@angular/core';
import { TvShow } from 'src/app/models/tv-show';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {

  userIndex = 0;
  tvShowRating = 0;

  @Input() tvShows: Array<TvShow>;

  constructor() { }

  ngOnInit(): void {
  }

}
