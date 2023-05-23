import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfiliadoService } from 'src/app/services/afiliado.service';

@Component({
  selector: 'app-tablad',
  templateUrl: './tablad.component.html',
  styleUrls: ['./tablad.component.css']
})
export class TabladComponent implements OnInit {

  @Input() headers: any[] = [];
  @Input() informacion: any[] = [];
  newC = ['icons'];
  totalC: string[] = []


  ngOnInit(): void {
    this.addColumn();
  }

  constructor(private router: Router, private afiliadoService: AfiliadoService) { }

  addColumn() {
    this.totalC = this.headers.concat(this.newC);
  }

  editEl(idEl: number) {
    this.router.navigate(['dashboard/afiliados/editar', idEl]);
  }

  borrarEl(idEl: number) {
    this.afiliadoService.deleteAfiliado(idEl).subscribe((response: { value: any; }) => {
      console.log(response);
      this.router.navigate(['dashboard/afiliados']);
      window.location.reload();
    });

  }
}
