import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Invento from '../model/Invento';

@Injectable({
  providedIn: 'root'
})
export class InventorService {

  constructor(private http:HttpClient) { }

  public getInventor(p:Invento){
    return this.http.post(`${environment.api_host}/inventor`, p);
  }

  public getAll(){
    return this.http.get(`${environment.api_host}/inventor`);
  }

}
