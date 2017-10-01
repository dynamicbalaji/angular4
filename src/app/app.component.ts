import { Component } from '@angular/core';
import { Car } from "./car";

const CARS: Car[] = [
  {id:1, model:"Altima 2.5S", manufacturer:"Nissan"},
  {id:2, model:"Civic", manufacturer:"Honda"}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cars';
  cars = CARS;
  selectedCar: Car;

  showSelectedCar(car: Car): void{
    this.selectedCar = car;
  }
}
