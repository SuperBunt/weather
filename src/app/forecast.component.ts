import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import { WeatherInfo } from './weather';
import { Forecast } from './forecast';
import { WeatherService } from './weather.service';

@Component({
    selector: 'forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./app.component.css']
})
export class WeatherComponent implements OnInit {
    city: Forecast;
    public iconCode: string;
    showHide: false;

    constructor(
        private weatherService: WeatherService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap // if param is a number put + before params to parse the value, the value is defined in the app-routing module
            .switchMap((params: ParamMap) => this.weatherService.getForecast(+params.get('id')))
            .subscribe((city: Forecast) => {
                this.city = city;
                console.log(this.city.city.name, this.city.list[0].weather[0].description);
            });
    }

    goBack(): void {
        this.location.back();
    }

}