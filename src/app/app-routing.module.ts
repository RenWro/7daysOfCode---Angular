import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './components/pages/people/people.component';
import { PlanetsComponent } from './components/pages/planets/planets.component';
import { StarshipsComponent } from './components/pages/starships/starships.component';
import { SearchComponent } from './components/pages/search/search.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FilmsComponent } from './components/pages/films/films.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'people',
    component: PeopleComponent,
  },
  {
    path: 'planets',
    component: PlanetsComponent,
  },
  {
    path: 'starships',
    component: StarshipsComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
