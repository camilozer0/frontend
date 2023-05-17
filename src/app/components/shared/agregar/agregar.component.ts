import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
}
