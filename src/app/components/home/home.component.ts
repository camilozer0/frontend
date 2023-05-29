import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  // Atributos
  @ViewChild('maintable') table!: MatTable<any>;
  @ViewChild('expandedtable') tableE!: MatTable<any>;

  tituloInicial = "Consultas";
  public afiliados: Afiliado[] = [];
  public idToShow: number = 0;
  public appParent: Cita[] = [];
  public appChild: any[] = [];
  public appChildExp: any[] = [];
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
    private fb: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarAfiliados();
  }

  // Métodos
  cargarAfiliados() {
    this.afiliadoService.getAfiliados().subscribe(response => {
      this.afiliados = response;
    });
  }

  byAff(datosForm: FormGroup) {
    this.cleanApps();
    this.appService.getAppbyAff(datosForm.value.idAff).subscribe(appByAff => {
      if (appByAff !== undefined) {
        this.appChild = appByAff;
        const foundCita = appByAff.find(element => element.idAffiliate.id === datosForm.value.idAff)
        if (foundCita !== undefined) {
          this.appParent.push(foundCita);
        }
      }
    }, null,
      () => {
        this.table.renderRows(),
          datosForm.get('date')?.setValue('')
      })
  }


  byDate(datosForm: FormGroup) {
    this.cleanApps();
    this.appService.getAppByDate(moment(datosForm.value.date).format('YYYY-MM-DD')).subscribe(appByDate => {
      if (appByDate !== undefined && appByDate !== null) {
        this.appChild = appByDate;
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
          this.appParent = uniqueIdT;
        }
      } else {
        this.snackBar.open(`No hay citas para la fecha ${moment(datosForm.value.date).format('DD-MM-YYYY')}`, '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      };
    }, null,
      () => {
        this.table.renderRows(),
          datosForm.get('idAff')?.setValue('');
      }
    )
  };

  cleanApps() {
    this.appParent = [];
    this.appChild = [];
  };

  toggleExp(element: any) {
    this.toggleRow(element)
    this.appChildExp = this.appChild.filter(object => object.idAffiliate.id === element.idAffiliate.id);
  }

  manageAllRows(flag: boolean) {
    this.appChild.forEach(row => {
      row.expanded = flag;
    })
  }

  toggleRow(element: { expanded: boolean; }) {
    if (element.expanded) {
      element.expanded = !element.expanded;
    } else {
      this.appChild.forEach(row => {
        row.expanded = false;
      })
      element.expanded = !element.expanded;
    }

  }

}
