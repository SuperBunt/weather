import 'rxjs/add/operator/switchMap';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

import { Forecast } from './forecast';
import { WeatherService } from './weather.service';
@Component({
    selector: 'forecast-slider',
    templateUrl: './forecast-slider.component.html',
    styleUrls: ['./app.component.css']
})
export class ForecastSliderComponent  {
    @Input() city: Forecast;
    public iconCode: string;

    // constructor(
    //     private weatherService: WeatherService,
    //     private route: ActivatedRoute,
    //     private location: Location
    // ) { }
    
}