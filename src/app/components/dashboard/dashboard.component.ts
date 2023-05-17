import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  tituloInicial = "Consulta";

  opciones(opciones: string) {
    this.tituloInicial = opciones;
  }

}
