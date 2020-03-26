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
  return this.http.get<Evento>(`${this.baseUrl}/${tema}`);
}

getEventoById(id: number): Observable<Evento> {
  return this.http.get<Evento>(`${this.baseUrl}/${id}`);
}

postEvento(evento: Evento) {
  return this.http.post(this.baseUrl, evento);
}

postUploadEvento(file: File, nomeArquivo: string) {
  const fileToUpload = file[0] as File;
  const formData = new FormData();
  formData.append('file', fileToUpload, nomeArquivo);

  return this.http.post(`${this.baseUrl}/upload`, formData);
}

putEvento(evento: Evento) {
  return this.http.put(`${this.baseUrl}/${evento.id}`, evento);
}

deleteEvento(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`);
}

}
