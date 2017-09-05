import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./app.component.css']
})
export class NavComponent implements OnInit {
  title = 'My Weather App';
  cities: City[];

  constructor (
    private router: Router,
    private cityService: CityService ) { }

  ngOnInit(): void {
    this.cityService.getCities().then(cities => this.cities = cities);
  }

}