import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from 'src/app/models/test';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-editarprueba',
  templateUrl: './editarprueba.component.html',
  styleUrls: ['./editarprueba.component.css']
})
export class EditarpruebaComponent implements OnInit {

  tituloInicial = 'Pruebas - Actualizar Prueba'

  pruebaForm = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    description: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')])
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
    private testService: PruebaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idElement = params['id'];
    });
    this.traerTest();
  }

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
    this.testService.putTest(this.editTest).subscribe(response => {
      console.log(response);
      this.router.navigate(['../../'], { relativeTo: this.route });
    })
  }

}
