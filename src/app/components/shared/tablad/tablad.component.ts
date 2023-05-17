import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablad',
  templateUrl: './tablad.component.html',
  styleUrls: ['./tablad.component.css']
})
export class TabladComponent {

  @Input() headers: any[] = [];
  @Input() informacion: any[] = [];
}
