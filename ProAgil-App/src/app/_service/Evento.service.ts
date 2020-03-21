import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../_model/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
baseUrl = 'http://localhost:5000/api/evento';
constructor(private http: HttpClient) { }

getEventos(): Observable<Evento[]> {
  return this.http.get<Evento[]>(this.baseUrl);
}

getEventosByTema(tema: string): Observable<Evento> {
  return this.http.get<Evento>(`${this.baseUrl}/tema/${tema}`);
}

getEventoById(id: number): Observable<Evento> {
  return this.http.get<Evento>(`${this.baseUrl}/id/${id}`);
}

postEvento(evento: Evento) {
  return this.http.post(this.baseUrl, evento);
}

putEvento(evento: Evento) {
  return this.http.post(this.baseUrl, evento);
}

}
