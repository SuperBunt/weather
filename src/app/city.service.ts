import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { City } from './city';
import { WeatherInfo } from './weather';
import { CITIES } from './mock-cities';

@Injectable()
export class CityService {

  constructor(private http: Http) { }

  getCities(): Promise<City[]> {
    return Promise.resolve(CITIES);
  }

  getCity(id: number): Promise<City> {
    const url = `http://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&APPID=2b9f7c6eea9ae73d9b7f688d10fe973c`;
        return this.http.get('url')
            .toPromise()
            .then(response => response.json() as City)
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  //https://en.wikipedia.org/w/api.php?action=query&titles=Dublin%20Page&prop=revisions&rvprop=content&format=json
}