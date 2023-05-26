import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from 'src/app/models/test';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-nuevaprueba',
  templateUrl: './nuevaprueba.component.html',
  styleUrls: ['./nuevaprueba.component.css']
})
export class NuevapruebaComponent {

  // Atributos
  tituloInicial = 'Pruebas - Nueva Prueba';
  public test: Test = {
    name: '',
    description: ''
  };
  pruebasForm = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    description: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')])
  });

  constructor(private fb: FormBuilder,
    private testService: PruebaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  // Métodos
  crearTest(dataTest: any): void {
    this.test.name = dataTest.value.name;
    this.test.description = dataTest.value.description;
    this.testService.postTest(this.test).subscribe(response => {
      this.test = response;
      console.log(this.test);
      this.pruebasForm.reset();
      this.snackBar.open(`La prueba con ID ${this.test.id} ha sido creada con éxito`, '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, null,
      () => this.volverRuta()
    )
  };

  volverRuta() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
