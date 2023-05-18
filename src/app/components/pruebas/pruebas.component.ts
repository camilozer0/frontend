import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Test } from '../../models/test';
import { PruebaService } from '../../services/prueba.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  tituloInicial = 'Pruebas'

  public tests: Test[] = [];
  public colQ: any[] = ['id', 'name', 'description'];
  public colN: any[] = ['id', 'name', 'description', 'icons'];

  constructor(private testService: PruebaService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.getTests();

    /*     nuevaPrueba() {
          this.router.navigate(['nueva'], { relativeTo: this.route });
        } */
  }

  getTests() {
    this.testService.getTests().subscribe(res => {
      this.tests = res;
      console.log(this.tests);
    })

  }


}



