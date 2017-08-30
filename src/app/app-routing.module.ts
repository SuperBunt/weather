import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent }   from './dashboard.component';
import { CityComponent }      from './cities.component';
import { WeatherComponent }      from './weather.component';
//import { CityDetailComponent }  from './city-detail.component';

const routes: Routes = [
 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard',  component: DashboardComponent },
  { path: 'weather/:id', component: WeatherComponent },
  { path: 'cities',     component: CityComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}