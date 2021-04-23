import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Consulta2Service {

  constructor(private http:HttpClient) { }

  getConsult(){
    return this.http.get(environment.api_host + '/consulta2');
  }
}
