import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

import { WeatherInfo } from './weather';
import { Forecast } from './forecast';
import { WeatherService } from './weather.service';
@Component({
    selector: 'current-city',
    templateUrl: './current.component.html',
    styleUrls: ['./current.component.css'],

})
export class CurrentWeatherComponent implements OnInit {
    city: WeatherInfo;
    image: string;

    constructor(
        private weatherService: WeatherService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap // if param is a number put + before params to parse the value, the value is defined in the app-routing module
            .switchMap((params: ParamMap) => this.weatherService.getWeather(+params.get('id')))
            .subscribe((city: WeatherInfo) => {
                this.city = city;
                this.image = 'assets/' + city.name + '.jpg';
                // this.getMyStyles('assets/'+city.name + '.jpg')
            });
    }

    goBack(): void {
        this.location.back();
    }

    setBackground() {
    // console.log(city);
    let myStyles = {
      'background-image': 'url(assets/' + this.city.id + '.jpg)',
      'background-repeat': 'no-repeat',
      'background-size': 'contain',
      'background-position': 'center'
    };
    return myStyles;
  }

}