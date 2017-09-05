import { Component, Input } from '@angular/core';
import { WeatherInfo } from './weather';

@Component({
  selector: 'weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})

export class WeatherDetailComponent {
  @Input() city: WeatherInfo;

  // getMyStyles(city: string) {
  //   // console.log(city);
  //   let myStyles = {
  //     'color': 'yellow',
  //     'text-shadow': '-1px -1px 2px #450000 , 1px 1px 1px #450000'
  //   };
  //   return myStyles;
  // }
}