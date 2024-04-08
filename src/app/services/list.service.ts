import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private urlApi = 'http://localhost:3000/animals';
  
  constructor(private http: HttpClient) { }
  
  remove(id: number) {
    return this.http.delete<Animal>(`${this.urlApi}/${id}`);
  }
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.urlApi);  //consulta lista de animais contida em db.json
  }
  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.urlApi}/${id}`)
  }
}
