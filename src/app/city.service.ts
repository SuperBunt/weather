import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { City } from './city';
import { CITIES } from './mock-cities';

@Injectable()
export class CityService {

  getCities(): Promise<City[]> {
    return Promise.resolve(CITIES);
  }

  getCity(id: number): Promise<City> {
    return this.getCities()
               .then(city => city.find(city => city.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}