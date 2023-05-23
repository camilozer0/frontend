import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../models/test';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private headers: HttpHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  private baseUrltests = 'http://localhost:8080/api/controller';

  constructor(private http: HttpClient) { }

  getTests(): Observable<Test[]> {
    return this.http.get<Test[]>(`${this.baseUrltests}/Test`);
  }

  postTest(test: Test): Observable<Test> {
    return this.http.post<Test>(`${this.baseUrltests}/Test`, test, { headers: this.headers })
  }

  putTest(test: Test): Observable<Test> {
    return this.http.put<Test>(`${this.baseUrltests}/Test/${test.id}`, test, { headers: this.headers })
  }

  getTest(idTest: number): Observable<Test> {
    return this.http.get<Test>(`${this.baseUrltests}/Test/${idTest}`);
  }

  deleteTest(idTest: number): Observable<any> {
    return this.http.delete(`${this.baseUrltests}/Test/${idTest}`, { headers: this.headers });
  }



}
