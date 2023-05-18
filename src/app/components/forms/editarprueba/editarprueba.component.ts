import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editarprueba',
  templateUrl: './editarprueba.component.html',
  styleUrls: ['./editarprueba.component.css']
})
export class EditarpruebaComponent {

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
