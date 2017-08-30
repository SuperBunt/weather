import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { WeatherInfo } from './weather';

@Injectable()
export class WeatherService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    //private city = 'Dublin';
    private weatherUrl = 'http://api.openweathermap.org/data/2.5/';  // URL to web api

    constructor(private http: Http) { }
    getWeather(id: number): Promise<WeatherInfo> {
        const url = `http://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&APPID=2b9f7c6eea9ae73d9b7f688d10fe973c`;
        console.log('id = ',id);
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as WeatherInfo)
            .catch(this.handleError);
    }

    getIcon(code: string){
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