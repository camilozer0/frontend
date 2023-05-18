import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-nuevoafiliado',
  templateUrl: './nuevoafiliado.component.html',
  styleUrls: ['./nuevoafiliado.component.css']
})
export class NuevoafiliadoComponent {

  tituloInicial = 'Afiliados - Nuevo Afiliado';

  selectedValue: string = '';
  selectedCar: string = '';

  afiliadosForm = this.fb.group({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private fb: FormBuilder) { }

  crearAfiliado() {

  }

}
