import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Afiliado } from 'src/app/models/afiliado';
import { Cita } from 'src/app/models/cita';
import { Test } from 'src/app/models/test';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { PruebaService } from 'src/app/services/prueba.service';
import { AfiliadoService } from 'src/app/services/afiliado.service';
import * as moment from 'moment';

@Component({
  selector: 'app-nuevacita',
  templateUrl: './nuevacita.component.html',
  styleUrls: ['./nuevacita.component.css']
})
export class NuevacitaComponent implements OnInit {

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
  };

  public affOption: Afiliado[] = [];

  public testOption: Test[] = [];

  tituloInicial = 'Citas - Nueva Cita';

  citasForm = this.fb.group({
    date: new FormControl('', Validators.required),
    hour: new FormControl('', Validators.required),
    idTest: new FormControl('', Validators.required),
    idAffiliate: new FormControl('', Validators.required)
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private appService: CitaService,
    private testService: PruebaService,
    private affService: AfiliadoService) { }

  ngOnInit(): void {
    this.afiliados();
    this.tests();
  }

  afiliados() {
    this.affService.getAfiliados().subscribe(response => {
      this.affOption = response;
      console.log(this.affOption)
    });
  }

  tests() {
    this.testService.getTests().subscribe(response => {
      this.testOption = response;
      console.log(this.testOption);
    });
  }

  crearCita(dataCita: any) {
    this.app.date = moment(dataCita.value.date).format('DD/MM/YYYY');
    this.app.hour = moment(dataCita.value.hour, 'h:mm A').format('HH:mm');
    this.app.idTest.id = dataCita.value.idTest;
    this.app.idAffiliate.id = dataCita.value.idAffiliate;

    console.log(this.app);


    this.appService.postCita(this.app).subscribe(response => {
      this.app = response;
      console.log(this.aff);
      this.citasForm.reset;
      this.volverRuta();
    });
  }

  volverRuta() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
