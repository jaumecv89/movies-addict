import { DetailsComponent } from './components/details/details.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'details/:type/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
