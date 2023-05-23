import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from 'src/app/models/test';
import { PruebaService } from 'src/app/services/prueba.service';

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
    private testService: PruebaService,
    private router: Router,
    private route: ActivatedRoute) { }

  crearTest(dataTest: any): void {
    this.test.name = dataTest.value.name;
    this.test.description = dataTest.value.description;
    this.testService.postTest(this.test).subscribe(response => {
      this.test = response;
      console.log(this.test);
      this.pruebasForm.reset();
      this.volverRuta();
    })
  }

  volverRuta() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
