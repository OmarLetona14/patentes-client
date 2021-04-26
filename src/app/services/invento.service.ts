import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Invento from '../model/Invento';

@Injectable({
  providedIn: 'root'
})
export class InventoService {

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get(`${environment.api_host}/inventos`);
  }

  public getOne(id:String){
    return this.http.get(`${environment.api_host}/inventos/${id}`);
  }

  public delete(id:string){
    return this.http.delete(`${environment.api_host}/inventos/${id}`);
  }

  public update(id:string, p:Invento){
    return this.http.put(`${environment.api_host}/inventos/${id}`, p);
  }
}
