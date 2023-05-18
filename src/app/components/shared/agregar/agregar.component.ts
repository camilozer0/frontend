import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  pruebasForm = this.fb.group({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private fb: FormBuilder) { }

  crearTest() {

  }
}
