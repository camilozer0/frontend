import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  constructor(private http: HttpClient) { }


  /*   getAfiliado(): Observable {
      this.http.get("")
    } */
}
