import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Pregunta from '../model/Pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get(`${environment.api_host}/preguntas`);
  }

  public getOne(id:String){
    return this.http.get(`${environment.api_host}/preguntas/${id}`);
  }

  public insert(p:Pregunta){
    return this.http.post(`${environment.api_host}/preguntas`, p);
  }

  public delete(id:string){
    return this.http.delete(`${environment.api_host}/preguntas/${id}`);
  }

  public update(id:string, p:Pregunta){
    return this.http.put(`${environment.api_host}/preguntas/${id}`, p);
  }
}
