import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, X-Auth-Token, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Origin': 'https://integrador-gabrielvillanueva.herokuapp.com'
  };

  constructor(private http: HttpClient) { }

  public login(user: any): Observable<any>{
    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(
      'https://integrador-gabrielvillanueva.herokuapp.com/usuario/login',
      body,
      {
        headers: { ...this.headers }
      },
    );
  }
}
