import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AfiliadoService } from 'src/app/services/afiliado.service';
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

  constructor(private router: Router, private citasService: CitaService) { }

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
      this.router.navigate(['dashboard/citas']);
      window.location.reload();
    });
  };

}
