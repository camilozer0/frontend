import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  opcion = '';

  @Output() screen = new EventEmitter<string>();

  setRoute1() {
    this.opcion = "Consulta"
    this.screen.emit(this.opcion);
  }
  setRoute2() {
    this.opcion = "Citas"
    this.screen.emit(this.opcion);
  }
  setRoute3() {
    this.opcion = "Pruebas"
    this.screen.emit(this.opcion);
  }
  setRoute4() {
    this.opcion = "Afiliados"
    this.screen.emit(this.opcion);
  }

}
