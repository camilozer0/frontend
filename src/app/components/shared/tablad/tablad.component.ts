import { Component, Input } from '@angular/core';
import { Test } from 'src/app/models/test';

@Component({
  selector: 'app-tablad',
  templateUrl: './tablad.component.html',
  styleUrls: ['./tablad.component.css']
})
export class TabladComponent {

  @Input() headers: any[] = [];
  @Input() informacion: any[] = [];
  @Input() colNumber: any[] = [];
}
