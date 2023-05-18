import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nuevaprueba',
  templateUrl: './nuevaprueba.component.html',
  styleUrls: ['./nuevaprueba.component.css']
})
export class NuevapruebaComponent {

  tituloInicial = 'Pruebas - Nueva Prueba'

  pruebasForm = this.fb.group({
    name: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private fb: FormBuilder) { }

  crearTest() {

  }

}
