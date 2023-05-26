import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-tablacitas',
  templateUrl: './tablacitas.component.html',
  styleUrls: ['./tablacitas.component.css']
})
export class TablacitasComponent {

  // Atributos
  @Input() headers: any[] = [];
  @Input() informacion: any[] = [];
  newC = ['icons'];
  totalC: string[] = []


  ngOnInit(): void {
    this.addColumn();
  }

  constructor(private router: Router,
    private citasService: CitaService,
    private snackBar: MatSnackBar) { }

  // Métodos
  addColumn() {
    this.totalC = this.headers.concat(this.newC);
  };

  editEl(idEl: number) {
    console.log(idEl)
    this.router.navigate(['dashboard/citas/editar', idEl]);
  };

  borrarEl(idEl: number) {
    this.citasService.deleteCita(idEl).subscribe((response: { value: any; }) => {
      console.log(response);
      this.router.navigate(['dashboard/citas'])
    }, null,
      () => {
        window.location.reload(), this.snackBar.open(`La prueba con ID ${idEl} ha sido borrada con éxito`, '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      });
  };

}
