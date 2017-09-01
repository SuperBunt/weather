import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { WeatherInfo } from './weather';
import { Forecast } from './forecast';

@Injectable()
export class WeatherService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private weatherUrl = 'http://api.openweathermap.org/data/2.5/';  // URL to web api

    constructor(private http: Http) { }
    // http://api.openweathermap.org/data/2.5/weather?id=2643741&units=imperial&APPID=2b9f7c6eea9ae73d9b7f688d10fe973c
    
    getWeather(id: number): Promise<WeatherInfo> {
        const url = `http://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&APPID=2b9f7c6eea9ae73d9b7f688d10fe973c`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as WeatherInfo)
            .catch(this.handleError);
    }

    // http://api.openweathermap.org/data/2.5/forecast?id=5128581&units=metric&APPID=2b9f7c6eea9ae73d9b7f688d10fe973c
    getForecast(id: number): Promise<Forecast> {
        const url = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&APPID=2b9f7c6eea9ae73d9b7f688d10fe973c`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Forecast)
            .catch(this.handleError);
    }

    getIcon(code: string): Promise<Blob>{
        const url = `http://openweathermap.org/img/w/${code}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.blob())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}