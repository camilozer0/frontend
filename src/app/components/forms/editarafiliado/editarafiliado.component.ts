import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editarafiliado',
  templateUrl: './editarafiliado.component.html',
  styleUrls: ['./editarafiliado.component.css']
})
export class EditarafiliadoComponent {
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
