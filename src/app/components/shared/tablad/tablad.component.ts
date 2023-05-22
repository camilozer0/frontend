import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  addColumn() {
    this.totalC = this.headers.concat(this.newC);
  }

  editEl(idEl: number) {
    this.router.navigate(['dashboard/afiliados/editar', idEl]);
  }
}
