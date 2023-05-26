import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private headers: HttpHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  private baseUrlCitas = 'http://localhost:8080/api/controller';

  constructor(private http: HttpClient) { }

  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.baseUrlCitas}/Appointment`);
  }

  postCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(`${this.baseUrlCitas}/Appointment`, cita, { headers: this.headers })
  }

  putCita(cita: Cita): Observable<Cita> {
    return this.http.put<Cita>(`${this.baseUrlCitas}/Appointment`, cita, { headers: this.headers });
  }

  getCita(idCita: number): Observable<Cita> {
    return this.http.get<Cita>(`${this.baseUrlCitas}/Appointment/${idCita}`);
  }

  deleteCita(idCita: number): Observable<any> {
    return this.http.delete(`${this.baseUrlCitas}/Appointment/${idCita}`, { headers: this.headers });
  }

  getAppbyAff(idAff: number): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.baseUrlCitas}/Appointment/Affiliate/${idAff}`, { headers: this.headers });
  }

  getAppByDate(date: string): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.baseUrlCitas}/Appointment/listgroup/${date}`, { headers: this.headers });
  }

}
