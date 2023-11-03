import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class ServiceService {

  apiUrl = 'http://localhost:8080'; // sua URL da API Spring Boot

  constructor(private http: HttpClient) { }

  getDadosDaApi() {
    return this.http.get(`${this.apiUrl}/seu-endpoint-da-api`);
  }
}
