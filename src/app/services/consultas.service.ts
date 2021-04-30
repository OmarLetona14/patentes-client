import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http:HttpClient) { }

  getConsulta1(){
    return this.http.get(environment.api_host + '/consultas/consulta1');
  }

  getConsulta2(){
    return this.http.get(environment.api_host + '/consultas/consulta2');
  }
  getConsulta3(){
    return this.http.get(environment.api_host + '/consultas/consulta3');
  }
  getConsulta4(){
    return this.http.get(environment.api_host + '/consultas/consulta4');
  }
  getConsulta5(){
    return this.http.get(environment.api_host + '/consultas/consulta5');
  }
  getConsulta6(){
    return this.http.get(environment.api_host + '/consultas/consulta6');
  }
  getConsulta7(){
    return this.http.get(environment.api_host + '/consultas/consulta7');
  }
  getConsulta8(){
    return this.http.get(environment.api_host + '/consultas/consulta8');
  }
  getConsulta9(){
    return this.http.get(environment.api_host + '/consultas/consulta9');
  }
  getConsulta10(){
    return this.http.get(environment.api_host + '/consultas/consulta10');
  }
  getConsulta11(){
    return this.http.get(environment.api_host + '/consultas/consulta11');
  }
  getConsulta12(){
    return this.http.get(environment.api_host + '/consultas/consulta12');
  }
  getConsulta13(){
    return this.http.get(environment.api_host + '/consultas/consulta13');
  }
  getConsulta14(){
    return this.http.get(environment.api_host + '/consultas/consulta14');
  }
  getConsulta15(){
    return this.http.get(environment.api_host + '/consultas/consulta15');
  }
  getConsulta16(){
    return this.http.get(environment.api_host + '/consultas/consulta16');
  }
  getConsulta17(){
    return this.http.get(environment.api_host + '/consultas/consulta17');
  }
  getConsulta18(){
    return this.http.get(environment.api_host + '/consultas/consulta18');
  }
  getConsulta19(){
    return this.http.get(environment.api_host + '/consultas/consulta19');
  }
  getConsulta20(){
    return this.http.get(environment.api_host + '/consultas/consulta20');
  }

}
