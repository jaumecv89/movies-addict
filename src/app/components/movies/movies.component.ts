import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  @Input() movies: Array<Movie>;

  constructor() { }

  ngOnInit(): void {
  }

}
