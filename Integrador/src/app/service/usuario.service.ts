import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  public login(user: any): Observable<any>{
    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(
      '/api/usuario/login',
      body,
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
