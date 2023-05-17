import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../models/test';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private baseUrltests = 'http://localhost:8080/api/controller';

  constructor(private http: HttpClient) { }


  getTests(): Observable<Test[]> {

    return this.http.get<Test[]>(`${this.baseUrltests}/Test`)

  }

}
