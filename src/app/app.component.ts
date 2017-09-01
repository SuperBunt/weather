import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityComponent } from './cities.component';
import { CityService } from './city.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Weather App';

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor(private router: Router,
    private cityService: CityService) { }

    gotoCities():void {
      this.router.navigate(['/cities']);
    }
  // onSelect(city: City): void {
  //   this.selectedCity = city;
  // }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedCity.id]);
  // }


}