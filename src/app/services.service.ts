
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  urlApi:string = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBFruCwPWbRmau-HNr3ZGp8cYKtl0AxWKE";  

  constructor(private http:HttpClient) { }

  valida(xml: string): Observable<any> {
   return this.http.post('http://localhost:8080/api/xmlnfe=/', xml);
  }

  sendData(rejeicao:string): Observable<any> {

    return this.http.post<any>(this.urlApi, rejeicao);

}
}
