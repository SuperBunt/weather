import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WeatherService } from './weather.service';
import { CityService } from './city.service';

import { AppComponent } from './app.component';
import { NavComponent } from './navbar.component';
import { WelcomeComponent } from './welcome.component';
import { WeatherComponent } from './forecast.component';
import { WeatherDetailComponent } from './weather-detail.component';
import { ForecastTableComponent } from './forecast-table.component';
import { ForecastSliderComponent } from './forecast-slider.component';
import { CityComponent } from './cities.component';
import { CurrentWeatherComponent } from './current.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [
        WeatherService,
        CityService
    ],
    declarations: [
        AppComponent,
        WeatherComponent,
        CityComponent,
        CurrentWeatherComponent,
        NavComponent,
        WelcomeComponent,
        ForecastTableComponent,
        ForecastSliderComponent,
        WeatherDetailComponent
    ],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})


export class AppModule { }