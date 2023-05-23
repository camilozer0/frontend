import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from 'src/app/models/test';

@Component({
  selector: 'app-nuevaprueba',
  templateUrl: './nuevaprueba.component.html',
  styleUrls: ['./nuevaprueba.component.css']
})
export class NuevapruebaComponent {

  tituloInicial = 'Pruebas - Nueva Prueba';

  public test: Test = {
    name: '',
    description: ''
  }

  pruebasForm = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    description: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')])
  });

  constructor(private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute) { }

  crearTest(dataTest: any) {

  }

}
