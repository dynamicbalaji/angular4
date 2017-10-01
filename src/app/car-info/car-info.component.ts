import { Component, OnInit, Input } from '@angular/core';
import { Car } from "../car";

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

  @Input() car: Car;

  constructor() { }

  ngOnInit() {
  }

}
