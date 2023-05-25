import { animate, state, style, transition, trigger } from '@angular/animations';
import { JsonPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import * as moment from 'moment';
import { Afiliado } from 'src/app/models/afiliado';
import { Cita } from 'src/app/models/cita';
import { AfiliadoService } from 'src/app/services/afiliado.service';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HomeComponent implements OnInit {

  @ViewChild('maintable') table!: MatTable<any>;
  @ViewChild('expandedtable') tableE!: MatTable<any>;

  // El titulo de la vista
  tituloInicial = "Consultas";
  public afiliados: Afiliado[] = [];
  public afiliado: Afiliado[] = [{
    id: 0,
    name: 'Camilo',
    age: 0,
    email: 'mazorra006@gmail.com'
  }];
  public idToShow: number = 0;
  public appointments: Cita[] = [];
  //expanded: false at the end of each affiliate (take into account)
  minDate = new Date(1920, 0, 1);
  maxDate = new Date(2024, 0, 1);
  datosForm = this.fb.group({
    date: new FormControl(''),
    idAff: new FormControl('')
  })
  headersMain: string[] = ['id', 'name', 'age', 'email'];
  headersMainExp: string[] = ['option', 'id', 'name', 'age', 'email'];
  colDataExpandible: string[] = ['id', 'date', 'hour', 'idTest', 'testName'];
  columnsToDisplay = ['id', 'name', 'email', 'address'];

  constructor(private afiliadoService: AfiliadoService,
    private appService: CitaService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cargarAfiliados();
  }

  // Métodos
  cargarAfiliados() {
    this.afiliadoService.getAfiliados().subscribe(response => {
      this.afiliados = response;
    });
  }

  toggleRow(element: { expanded: boolean; }) {
    // Uncommnet to open only single row at once
    this.afiliados.forEach(row => {
      //row.expanded = false;
    })
    element.expanded = !element.expanded;
  }

  byAff(datosForm: FormGroup) {
    this.appointments = [];
    this.afiliadoService.getAfiliado(datosForm.value.idAff).subscribe(affShow => {
      this.afiliado[0] = affShow;
      this.idToShow = this.afiliado[0].id!;
      this.table.renderRows();
    });
    this.appService.getAppbyAff(datosForm.value.idAff).subscribe(appByAff => {
      if (appByAff !== undefined) {
        const foundCita = appByAff.find(element => element.idAffiliate.id === this.idToShow)
        if (foundCita !== undefined) {
          this.appointments.push(foundCita);
          console.log(this.appointments);
        }
      }
      this.table.renderRows();
    });
  }
  /* manageAllRows(flag: boolean) {
    this.afiliados.forEach(row => {
      row.expanded = flag;
    })
  } */

  byDate(datosForm: FormGroup) {
    this.appointments = [];
    this.appService.getAppByDate(moment(datosForm.value.date).format('YYYY-MM-DD')).subscribe(appByDate => {
      if (appByDate !== undefined) {
        const uniqueIdT = [];
        const idTMap: { [key: number]: boolean } = {};
        for (const obj of appByDate) {
          const id = obj.idAffiliate.id;
          if (id !== undefined && !idTMap[id]) {
            idTMap[id] = true;
            uniqueIdT.push(obj);
          }
        }
        if (uniqueIdT !== undefined) {
          this.appointments = uniqueIdT;
          console.log(uniqueIdT);
        }
      };

    })
  }

}
