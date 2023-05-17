import { Component, OnInit } from '@angular/core';
import { Test } from '../models/test';
import { PruebaService } from '../services/prueba.service';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  public tests: Test[] = [];

  constructor(private testService: PruebaService) { }
  ngOnInit(): void {
    this.getTests();
  }

  getTests() {
    this.testService.getTests().subscribe(res => {
      this.tests = res;
      console.log(this.tests);
    })

  }

}
