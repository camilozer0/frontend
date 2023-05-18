import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

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

  tituloInicial = 'Citas - Nueva Cita';

  citasForm = this.fb.group({
    date: new FormControl(''),
    time: new FormControl(''),
    idTest: new FormControl(''),
    idAffiliate: new FormControl('')
  });

  constructor(private fb: FormBuilder) { }

  crearCita() {

  }

}
