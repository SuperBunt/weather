import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Weather';

  cities: City[];
  selectedCity: City;

  constructor(private router: Router,
    private cityService: CityService) { }

  getCities(): void {
    this.cityService.getCities().then(cities => this.cities = cities);
  }

  ngOnInit(): void {
    this.getCities();
  }

  // onSelect(city: City): void {
  //   this.selectedCity = city;
  // }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedCity.id]);
  // }


}