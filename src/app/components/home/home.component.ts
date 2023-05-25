import { animate, state, style, transition, trigger } from '@angular/animations';
import { JsonPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import * as moment from 'moment';
import { Afiliado } from 'src/app/models/afiliado';
import { AfiliadoService } from 'src/app/services/afiliado.service';
import { CitaService } from 'src/app/services/cita.service';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
  expanded: boolean;
}

const ELEMENT_DATA: User[] = [
  {
    "id": 123,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": "Kulas Light Apt. 556 Gwenborough",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": "Romaguera-Crona",
    "expanded": false
  },
  {
    "id": 52,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": "Victor Plains Suite 879 Wisokyburgh",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": "Deckow-Crist",
    "expanded": false
  },
  {
    "id": 62,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": "Douglas Extension Suite 847 McKenziehaven",
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": "Romaguera-Jacobson",
    "expanded": false
  },
  {
    "id": 65,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": "Hoeger Mall Apt. 692 South Elvis",
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": "Robel-Corkery",
    "expanded": false
  },
  {
    "id": 84,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": "Skiles Walks Suite 351 Roscoeview",
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": "Keebler LLC",
    "expanded": false
  }
];


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

  public dataExpandable: any[] = [];

  minDate = new Date(1920, 0, 1);
  maxDate = new Date(2024, 0, 1);

  datosForm = this.fb.group({
    date: new FormControl(''),
    idAff: new FormControl('')
  })

  title = 'angular-mat-table-example';
  headersMain: string[] = ['id', 'name', 'age', 'email'];
  headersMainExp: string[] = ['option', 'id', 'name', 'age', 'email'];

  colDataExpandible: string[] = ['id', 'date', 'hour', 'idTest', 'testName'];


  datatwo = ELEMENT_DATA;
  columnsToDisplay = ['id', 'name', 'email', 'address'];

  constructor(private afiliadoService: AfiliadoService,
    private appService: CitaService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cargarAfiliados();
  }

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
    this.afiliadoService.getAfiliado(datosForm.value.idAff).subscribe(affShow => {
      this.afiliado[0] = affShow;
      this.table.renderRows();
    });
    this.appService.getAppbyAff(datosForm.value.idAff).subscribe(appByDate => {
      this.dataExpandable = appByDate;
      console.log(this.dataExpandable);
      this.tableE.renderRows()
    });
  }
  /* manageAllRows(flag: boolean) {
    this.afiliados.forEach(row => {
      row.expanded = flag;
    })
  } */

  byDate(datosForm: FormGroup) {
    console.log(moment(datosForm.value.date).format('DD/MM/YYYY'));
  }

}
