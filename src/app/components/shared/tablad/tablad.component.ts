import { Component, Input, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test';

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
    this.printme();
  }

  printme() {
    this.totalC = this.headers.concat(this.newC);
    console.log(this.totalC);
  }
}
