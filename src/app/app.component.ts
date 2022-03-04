import { Component,  OnInit } from '@angular/core';

import { trigger, transition, group, query, style, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
