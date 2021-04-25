import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import Region from '../model/Region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get(`${environment.api_host}/regiones`);
  }

  public getByName(r:Region){
    return this.http.post(`${environment.api_host}/regiones`, r);
  }
}
