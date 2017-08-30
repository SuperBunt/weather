import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

import { WeatherInfo } from './weather';
import { WeatherService } from './weather.service';
@Component({
    selector: 'city-detail',
    templateUrl: './weather.component.html',
    styleUrls: ['./app.component.css']
})
export class WeatherComponent implements OnInit {
    city: WeatherInfo;
    public iconCode: string;

    constructor(
        private weatherService: WeatherService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap // if param is a number put + before params to parse the value, the value is defined in the app-routing module
            .switchMap((params: ParamMap) => this.weatherService.getWeather(+params.get('id')))   
            .subscribe((city: WeatherInfo )=> {
                this.city = city;
                this.city.icon = this.weatherService.getIcon(city.sys.);
                console.log(this.city);
            });
    }

    goBack(): void {
        this.location.back();
    }

    setIcon() {
    const compare = this.city.weather[0].icon;
    switch (compare) {
      case '01d':
        this.iconCode = 'wi-day-sunny';
        break;
      case '01n':
        this.iconCode = 'wi-night-clear';
        break;
      case '02d':
        this.iconCode = 'wi-day-cloudy';
        break;
      case '02n':
        this.iconCode = 'wi-night-alt-cloudy';
        break;
      case '03d':
      case '03n':
        this.iconCode = 'wi-cloud';
        break;
      case '04d':
      case '04n':
        this.iconCode = 'wi-cloudy';
        break;
      case '09d':
      case '09n':
        this.iconCode = 'wi-showers';
        break;
      case '10d':
        this.iconCode = 'wi-day-rain';
        break;
      case '10n':
        this.iconCode = 'wi-night-alt-rain';
        break;
      case '11d':
      case '11n':
        this.iconCode = 'wi-thunderstorm';
        break;
      case '13d':
      case '13n':
        this.iconCode = 'wi-snow';
        break;
      case '50d':
      case '50n':
        this.iconCode = 'wi-dust';
        break;
    }
  }
}