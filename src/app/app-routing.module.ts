import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent }   from './welcome.component';
import { CurrentWeatherComponent } from './current.component';
import { CityComponent } from './cities.component';
import { WeatherComponent } from './forecast.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'forecast/:id', component: WeatherComponent },
  { path: 'current/:id', component: CurrentWeatherComponent },
  { path: 'cities', component: CityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }