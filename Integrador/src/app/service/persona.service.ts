import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://integrador-gabrielvillanueva.herokuapp.com/personas/';
  headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, X-Auth-Token, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Origin': 'https://integrador-gabrielvillanueva.herokuapp.com'
  };

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(
      this.URL + 'traer',
      {
        headers: { ...this.headers }
      },
    );
  }

  public editPersona(data: any): Observable<any>{
    let body = JSON.stringify(data);

    return this.http.post(
      this.URL + 'editar',
      body,
      {
        headers: { ...this.headers }
      },
    );
  }
}
