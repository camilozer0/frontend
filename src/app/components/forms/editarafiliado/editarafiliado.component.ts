import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Afiliado } from 'src/app/models/afiliado';

@Component({
  selector: 'app-editarafiliado',
  templateUrl: './editarafiliado.component.html',
  styleUrls: ['./editarafiliado.component.css']
})
export class EditarafiliadoComponent implements OnInit {
  tituloInicial = 'Afiliados - Nuevo Afiliado';

  selectedValue: string = '';
  selectedCar: string = '';

  afiliadosForm = this.fb.group({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('')
  });

  public idElement: number = 0;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idElement = params['id'];
      console.log(this.idElement);
      this.traerAfiliado();
    })
  }

  public editarAf: Afiliado = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  };

  traerAfiliado() {

  }

  editarAfiliado(afSeleccionado: Afiliado) {
    this.editarAf = afSeleccionado;
  }

}
