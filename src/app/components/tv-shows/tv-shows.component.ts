import { TvShows } from './../../models/tv-shows';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {

  @Input() tvShows: TvShows;

  constructor() { }

  ngOnInit(): void {
  }

}
