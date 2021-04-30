import { Component, OnInit, ViewChild } from '@angular/core';
import { Consulta2Service } from 'src/app/services/consulta2.service';
import { ConsultasService } from 'src/app/services/consultas.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

 consulta1:any = [];consulta2:any = [];consulta3:any = [];consulta4:any = [];consulta5:any = [];consulta6:any = [];consulta7:any = [];
 consulta8:any = [];consulta9:any = [];consulta10:any = [];consulta11:any = [];consulta12:any = [];consulta13:any = [];consulta14:any = [];
 consulta15:any = [];consulta16:any = [];consulta17:any = [];consulta18:any = [];consulta19:any = [];consulta20:any = [];
    
  constructor(private spinnerService:SpinnerService, private consultasService:ConsultasService) {}

  ngOnInit(): void {
  this.getConsulta1();
   this.getConsulta2(); 
   this.getConsulta3(); 
   this.getConsulta4(); 
   this.getConsulta5(); 
   this.getConsulta6(); 
   this.getConsulta7(); 
   this.getConsulta8(); 
   this.getConsulta9(); 
   this.getConsulta10(); 
   this.getConsulta11(); 
   this.getConsulta12(); 
   this.getConsulta13(); 
   this.getConsulta14(); 
   this.getConsulta15(); 
   this.getConsulta16(); 
   this.getConsulta17(); 
   this.getConsulta18(); 
   this.getConsulta19(); 
   this.getConsulta20(); 
  }

  getConsulta1(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta1().subscribe(
      res =>{
        this.consulta1 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }

  getConsulta2(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta2().subscribe(
      res =>{
        this.consulta2 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  
  getConsulta3(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta3().subscribe(
      res =>{
        this.consulta3 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta4(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta4().subscribe(
      res =>{
        this.consulta4 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta5(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta5().subscribe(
      res =>{
        this.consulta5 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta6(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta6().subscribe(
      res =>{
        this.consulta6 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta7(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta7().subscribe(
      res =>{
        this.consulta7 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta8(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta8().subscribe(
      res =>{
        this.consulta8 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta9(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta9().subscribe(
      res =>{
        this.consulta9 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta10(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta10().subscribe(
      res =>{
        this.consulta10 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta11(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta11().subscribe(
      res =>{
        this.consulta11 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta12(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta12().subscribe(
      res =>{
        this.consulta12 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta13(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta13().subscribe(
      res =>{
        this.consulta13 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta14(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta14().subscribe(
      res =>{
        this.consulta14 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta15(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta15().subscribe(
      res =>{
        this.consulta15 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta16(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta16().subscribe(
      res =>{
        this.consulta16 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta17(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta17().subscribe(
      res =>{
        this.consulta17 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta18(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta18().subscribe(
      res =>{
        this.consulta18 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta19(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta19().subscribe(
      res =>{
        this.consulta19 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }
  getConsulta20(){
    this.spinnerService.getSpinner();
    this.consultasService.getConsulta20().subscribe(
      res =>{
        this.consulta20 = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }


}
