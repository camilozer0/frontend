import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vista-i',
  templateUrl: './vista-i.component.html',
  styleUrls: ['./vista-i.component.css']
})
export class VistaIComponent {

  @Input() titulo = "Consultas";
}
