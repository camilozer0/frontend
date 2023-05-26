import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from 'src/app/models/test';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-editarprueba',
  templateUrl: './editarprueba.component.html',
  styleUrls: ['./editarprueba.component.css']
})
export class EditarpruebaComponent implements OnInit {

  // Atributos
  tituloInicial = 'Pruebas - Actualizar Prueba'
  pruebaForm = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    description: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')])
  });
  public idElement: number = 0;
  public editTest: Test = {
    id: 0,
    name: '',
    description: ''
  }

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private testService: PruebaService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idElement = params['id'];
    });
    this.traerTest();
  }

  // Métodos
  traerTest() {
    this.testService.getTest(this.idElement).subscribe(testEditar => {
      this.pruebaForm = this.fb.group({
        name: [testEditar.name, Validators.required],
        description: [testEditar.description, Validators.required],
      });
      this.editTest.id = testEditar.id;
    })
  }

  editarTest(pruebaForm: any) {
    this.editTest.name = pruebaForm.value.name;
    this.editTest.description = pruebaForm.value.description;
    console.log(pruebaForm)
    this.testService.putTest(this.editTest).subscribe(editTest => {
      console.log(editTest);
      this.snackBar.open(`La cita con ID ${editTest.id} ha sido actualizada con éxito`, '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, null,
      () => this.volverRuta())
  };

  volverRuta() {
    this.router.navigate(['/dashboard/pruebas']);
  };

}
