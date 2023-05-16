import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../tabla-anidada/tabla-anidada.component';
import { Afiliado } from '../models/afiliado';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  private baseUrlAffiliates = 'http://localhost:3306/sophos';

  ELEMENT_ONE: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', expanded: false },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', expanded: false },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', expanded: false },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', expanded: false },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', expanded: false },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', expanded: false },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', expanded: false },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', expanded: false },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', expanded: false },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', expanded: false },
  ]

  constructor(private http: HttpClient) { }


  getAfiliado() {
    //: Observable<Afiliado[]> {

    // consumir el microservicio

    return this.ELEMENT_ONE.slice();

    //return this.http.get<Afiliado[]>(`${this.baseUrlAffiliates} / Affiliate`);
  }

  /*  getAfiliado(): Observable {
     this.http.get("")
   } */
}
