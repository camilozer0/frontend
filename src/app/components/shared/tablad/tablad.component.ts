import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
  @Input() headers: any[] = [];
  @Input() informacion: any[] = [];
  @Input() option: boolean = false;
  newC = ['icons'];
  totalC: string[] = []


  ngOnInit(): void {
    this.addColumn();
  }

  constructor(private router: Router,
    private afiliadoService: AfiliadoService,
    private pruebaService: PruebaService,
    private snackBar: MatSnackBar) { }

  // Métodos
  addColumn() {
    this.totalC = this.headers.concat(this.newC);
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
        console.log(delAff);
      }, () => {
        this.snackBar.open(`El afiliado con ID ${idEl} tiene una cita agendada`, '', {
          duration: 3000,
          verticalPosition: 'bottom'
        });
      },
        () => {
          this.router.navigate(['dashboard/afiliados']), window.location.reload(), this.snackBar.open(`El afiliado con ID ${idEl} ha sido borrado con éxito`, '', {
            duration: 3000,
            verticalPosition: 'bottom'
          })
        })
    } else {
      this.pruebaService.deleteTest(idEl).subscribe((delTest: { value: any; }) => {
        console.log(delTest);
      }, () => {
        this.snackBar.open(`La prueba con ID ${idEl} tiene una cita agendada`, '', {
          duration: 3000,
          verticalPosition: 'bottom'
        });
      },
        () => {
          this.router.navigate(['dashboard/pruebas']), window.location.reload(), this.snackBar.open(`La prueba con ID ${idEl} ha sido borrada con éxito`, '', {
            duration: 3000,
            verticalPosition: 'bottom'
          })
        }
      );
    }

  };

}
