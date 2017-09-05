import 'rxjs/add/operator/switchMap';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

import { Forecast } from './forecast';
import { WeatherService } from './weather.service';
@Component({
    selector: 'forecast-table',
    templateUrl: './forecast-table.component.html',
    styleUrls: ['./app.component.css']
})
export class ForecastTableComponent  {
    @Input() city: Forecast;
    
    // constructor(
    //     private weatherService: WeatherService,
    //     private route: ActivatedRoute,
    //     private location: Location
    // ) { }
    
}