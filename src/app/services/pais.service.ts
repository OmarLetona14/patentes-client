import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Pais from '../model/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get(`${environment.api_host}/paises`);
  }

  public getFronteras(id:string){
    return this.http.get(`${environment.api_host}/paises/fronteras/${id}`);
  }

  public getOne(id:String){
    return this.http.get(`${environment.api_host}/paises/${id}`);
  }

  public insert(p:Pais){
    return this.http.post(`${environment.api_host}/paises`, p);
  }

  public delete(id:string){
    return this.http.delete(`${environment.api_host}/paises/${id}`);
  }

  public update(id:string, p:Pais){
    return this.http.put(`${environment.api_host}/paises/${id}`, p);
  }
}
