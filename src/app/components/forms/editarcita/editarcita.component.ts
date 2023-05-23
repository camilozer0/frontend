import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Afiliado } from 'src/app/models/afiliado';
import { Test } from 'src/app/models/test';
import { AfiliadoService } from 'src/app/services/afiliado.service';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-editarcita',
  templateUrl: './editarcita.component.html',
  styleUrls: ['./editarcita.component.css']
})
export class EditarcitaComponent implements OnInit {

  tituloInicial = 'Citas - Actualizar Cita';

  public affOption: Afiliado[] = [];

  public testOption: Test[] = [];

  citasForm = this.fb.group({
    date: new FormControl('', Validators.required),
    hour: new FormControl('', Validators.required),
    idTest: new FormControl('', Validators.required),
    idAffiliate: new FormControl('', Validators.required)
  });

  constructor(private fb: FormBuilder,
    private affService: AfiliadoService,
    private testService: PruebaService) { }

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

  }

}
