import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AfiliadoService } from 'src/app/services/afiliado.service';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-tablad',
  templateUrl: './tablad.component.html',
  styleUrls: ['./tablad.component.css']
})
export class TabladComponent implements OnInit {

  // Atributos
  @Input() headers: { [key: string]: string } = {};
  @Input() informacion: any[] = [];
  @Input() option: boolean = false;
  headersKey: string[] = [];
  headersExp: { [key: string]: string } = {};


  ngOnInit(): void {
    this.addColumn();
  }

  constructor(private router: Router,
    private afiliadoService: AfiliadoService,
    private pruebaService: PruebaService,
    private snackBar: MatSnackBar) { }

  // Métodos
  addColumn() {
    this.headersKey = Object.keys(this.headers);
    this.headersKey.push('options');
    console.log(this.headersKey);
  };

  editEl(idEl: number) {
    if (this.option) {
      this.router.navigate(['dashboard/afiliados/editar', idEl]);
    } else {
      this.router.navigate(['dashboard/pruebas/editar', idEl]);
    }
  };

  borrarEl(idEl: number) {
    if (this.option) {
      this.afiliadoService.deleteAfiliado(idEl).subscribe((delAff: { value: any; }) => {
        window.location.reload();
      }, () => {
        this.snackBar.open(`El afiliado con ID ${idEl} tiene una cita agendada`, '', {
          duration: 3000,
          verticalPosition: 'bottom'
        });
      },
        () => {
          this.router.navigate(['dashboard/afiliados']),
            this.snackBar.open(`El afiliado con ID ${idEl} ha sido borrado con éxito`, '', {
              duration: 3000,
              verticalPosition: 'bottom'
            })
        })
    } else {
      this.pruebaService.deleteTest(idEl).subscribe((delTest: { value: any; }) => {
        window.location.reload();
      }, () => {
        this.snackBar.open(`La prueba con ID ${idEl} tiene una cita agendada`, '', {
          duration: 3000,
          verticalPosition: 'bottom'
        });
      },
        () => {
          this.router.navigate(['dashboard/pruebas']),
            this.snackBar.open(`La prueba con ID ${idEl} ha sido borrada con éxito`, '', {
              duration: 3000,
              verticalPosition: 'bottom'
            })
        }
      );
    }
  };

}
