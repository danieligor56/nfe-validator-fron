
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  

  constructor(private http:HttpClient) { }

  valida(xml: string): Observable<any> {
   return this.http.post('http://localhost:8080/api/xmlnfe=/', xml);
  }

}
