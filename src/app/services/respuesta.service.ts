import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Pregunta from '../model/Pregunta';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(private http:HttpClient) { }

  public getByPregunta(r:Pregunta){
    return this.http.post(`${environment.api_host}/respuestas`, r);
  }
}
