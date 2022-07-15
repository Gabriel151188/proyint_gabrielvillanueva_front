import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'https://integrador-gabrielvillanueva.herokuapp.com/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL + 'traer');
  }

  public editPersona(data: any): Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    });

    return this.http.post(
      this.URL + 'editar',
      body,
      {
        headers: { ...headers },
      },
    );
  }
}
