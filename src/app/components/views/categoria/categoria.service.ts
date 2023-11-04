import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = 'http://localhost:8080'

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll():Observable<Categoria[]>{

    const url = `${this.baseUrl}/categorias`

    return this.http.get<Categoria[]>(url)
  }

  findById(id: String): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.get<Categoria>(url)
  }

  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Categoria>(url, categoria)
  }

  delete(id: String ):Observable<void>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.delete<void>(url)
  }


  mensagem(str: String): void{
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
