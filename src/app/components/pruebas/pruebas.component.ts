import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Test } from '../../models/test';
import { PruebaService } from '../../services/prueba.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit, OnChanges {

  tituloInicial = 'Pruebas'

  public tests: Test[] = [];
  public colQ: any[] = ['id', 'name', 'description'];

  constructor(private testService: PruebaService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.cargarTests();
  }

  ngOnInit(): void {
    this.cargarTests();
  }

  /*     nuevaPrueba() {
      this.router.navigate(['nueva'], { relativeTo: this.route });
    } */

  cargarTests() {
    this.testService.getTests().subscribe(res => {
      this.tests = res;
      console.log(this.tests);
    })

  }


}



