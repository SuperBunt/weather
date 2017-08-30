import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WeatherService } from './weather.service';
import { CityService } from './city.service';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather.component';
import { CityComponent } from './cities.component';
// import { CityDetailComponent } from './city-detail.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
    providers: [
        WeatherService, CityService
    ],
    declarations: [AppComponent, WeatherComponent, CityComponent],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})


export class AppModule { }