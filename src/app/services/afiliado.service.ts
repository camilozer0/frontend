import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Afiliado } from '../models/afiliado';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  private baseUrlAffiliates = 'http://localhost:8080/api/controller';

  constructor(private http: HttpClient) { }

  private headers: HttpHeaders = new HttpHeaders({ 'content-type': 'application/json' })

  getAfiliados(): Observable<Afiliado[]> {
    return this.http.get<Afiliado[]>(`${this.baseUrlAffiliates}/Affiliate`);
  }

  postAfiliado(affiliate: Afiliado): Observable<Afiliado> {
    return this.http.post<Afiliado>(`${this.baseUrlAffiliates}/Affiliate`, affiliate, { headers: this.headers });
  }

  putAfiliado(affiliate: Afiliado): Observable<Afiliado> {
    return this.http.put<Afiliado>(`${this.baseUrlAffiliates}/Affiliate`, affiliate, { headers: this.headers })
  }

  getAfiliado(idAff: number): Observable<Afiliado> {
    return this.http.get<Afiliado>(`${this.baseUrlAffiliates}/Affiliate/${idAff}`)
  }

  deleteAfiliado(idAff: number): Observable<any> {
    return this.http.delete(`${this.baseUrlAffiliates}/Affiliate/${idAff}`, { headers: this.headers });
  }

}
