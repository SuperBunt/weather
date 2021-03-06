import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

import { City }        from './city';
import { CityService } from './city.service';

@Component({
  selector: 'my-cities',
  templateUrl: './cities.component.html',
  styleUrls: [ './app.component.css' ]
})
export class CityComponent implements OnInit {
  selectedCity: City;
  cities: City[];
  image: string;

  constructor(
    private router: Router,
    private cityService: CityService) { }

  getCities(): void {
    this.cityService.getCities().then(cities => this.cities = cities);
  }

  ngOnInit(): void {
    this.getCities();
  }

  onSelect(city: City): void {
    this.cityService.getCity(city.id).then((current) => {
      this.selectedCity = current;
    });
  }

  gotoDetail(): void {
    this.router.navigate(['/forecast', this.selectedCity.id]);
  }
}