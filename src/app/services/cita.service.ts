import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private baseUrlCitas = 'http://localhost:8080/api/controller';

  constructor(private http: HttpClient) { }

  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.baseUrlCitas}/Appointment`);

  }
}
