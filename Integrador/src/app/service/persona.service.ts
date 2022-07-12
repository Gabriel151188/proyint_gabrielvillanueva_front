import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = '/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL + 'traer');
  }

  public editPersona(data: any): Observable<any>{
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(
      this.URL + 'editar',
      body,
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
