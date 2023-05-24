import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfiliadoService } from 'src/app/services/afiliado.service';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-tablad',
  templateUrl: './tablad.component.html',
  styleUrls: ['./tablad.component.css']
})
export class TabladComponent implements OnInit {

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
    private pruebaService: PruebaService) { }

  addColumn() {
    this.totalC = this.headers.concat(this.newC);
  }

  editEl(idEl: number) {
    if (this.option) {
      this.router.navigate(['dashboard/afiliados/editar', idEl]);
    } else {
      this.router.navigate(['dashboard/pruebas/editar', idEl]);
    }
  }

  borrarEl(idEl: number) {
    if (this.option) {
      this.afiliadoService.deleteAfiliado(idEl).subscribe((response: { value: any; }) => {
        console.log(response);
        this.router.navigate(['dashboard/afiliados']);
      })
    } else {
      this.pruebaService.deleteTest(idEl).subscribe((response: { value: any; }) => {
        console.log(response);
        this.router.navigate(['dashboard/pruebas']);
      });
    }
    window.location.reload();
  }
}
