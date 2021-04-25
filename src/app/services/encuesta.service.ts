import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Encuesta from '../model/Encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get(`${environment.api_host}/encuestas`);
  }

  public getByName(e:Encuesta){
    return this.http.post(`${environment.api_host}/encuestas`, e);
  }
}
