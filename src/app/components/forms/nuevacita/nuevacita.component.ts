import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Afiliado } from 'src/app/models/afiliado';
import { Cita } from 'src/app/models/cita';
import { Test } from 'src/app/models/test';
import { ActivatedRoute, Router } from '@angular/router';

export interface Food {
  value: number;
  viewValue: number;
}


@Component({
  selector: 'app-nuevacita',
  templateUrl: './nuevacita.component.html',
  styleUrls: ['./nuevacita.component.css']
})
export class NuevacitaComponent {

  foods: Food[] = [
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 }
  ];

  public test: Test = {
    id: 0,
    name: '',
    description: ''
  }

  public aff: Afiliado = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  }

  public app: Cita = {
    date: '',
    hour: '',
    idTest: this.test,
    idAffiliate: this.aff
  }

  tituloInicial = 'Citas - Nueva Cita';

  citasForm = this.fb.group({
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    idTest: new FormControl('', Validators.required),
    idAffiliate: new FormControl('', Validators.required)
  });

  constructor(private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  crearCita(data: any) {
    this.app.date = data.value.name;
    this.app.hour = data.value.age;
    this.app.idTest.id = data.value.idTest;
    this.app.idAffiliate.id = data.value.idAffiliate


    /* this.afiliadoService.postAfiliado(this.aff).subscribe(response => {
      this.aff = response;
      console.log(this.aff) */
    /* }); */

    this.citasForm.reset;
    this.volverRuta();
  }

  volverRuta() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
