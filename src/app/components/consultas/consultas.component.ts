import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Consulta2 from 'src/app/model/Consulta2';
import { Consulta2Service } from 'src/app/services/consulta2.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

 countries:any = [];
    
  constructor(private spinnerService:SpinnerService, private consultaService:Consulta2Service) {}

  ngOnInit(): void {
    this.spinnerService.getSpinner();
    this.consultaService.getConsult().subscribe(
      res =>{
        this.countries = res;
        this.spinnerService.stopSpinner();
     },
      err =>{
        console.log(err);
        this.spinnerService.stopSpinner();
      }
    );
  }

}
