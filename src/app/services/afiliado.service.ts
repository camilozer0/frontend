import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Afiliado } from '../models/afiliado';
import { PeriodicElement } from '../components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  private baseUrlAffiliates = 'http://localhost:8080/api/controller';

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

  private headers: HttpHeaders = new HttpHeaders({ 'content-type': 'application/json' })

  getAfiliados(): Observable<Afiliado[]> {
    return this.http.get<Afiliado[]>(`${this.baseUrlAffiliates}/Affiliate`);
    //return this.http.get<Afiliado[]>('http://localhost:8080/api/controller/Affiliate');
  }

  postAfiliado(affiliate: Afiliado): Observable<Afiliado> {
    console.log(affiliate);
    return this.http.post<Afiliado>(`${this.baseUrlAffiliates}/Affiliate`, affiliate, { headers: this.headers });

  }

  putAfiliado(affiliate: Afiliado): Observable<Afiliado> {
    console.log(affiliate);
    return this.http.put<Afiliado>(`${this.baseUrlAffiliates}/Affiliate/${affiliate.id}`, affiliate, { headers: this.headers })
  }

  getAfiliado(idAff: number): Observable<Afiliado> {
    return this.http.get<Afiliado>(`${this.baseUrlAffiliates}/Affiliate/${idAff}`)
  }


  deleteAfiliado(idAff: number): Observable<any> {
    console.log(`${this.baseUrlAffiliates}/Affiliate/${idAff}`);
    return this.http.delete(`${this.baseUrlAffiliates}/Affiliate/${idAff}`, { headers: this.headers });

  }

}
