import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  minDate = new Date(1920, 0, 1);
  maxDate = new Date(2020, 0, 1);


}
