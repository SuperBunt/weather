import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Weather App';

  constructor (
    private router: Router,
    private cityService: CityService ) { }

}