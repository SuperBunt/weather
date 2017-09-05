import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./app.component.css']
})
export class WelcomeComponent {
  title = 'My Weather App';

  // constructor (
  //   private router: Router,
  //   private cityService: CityService ) { }

}