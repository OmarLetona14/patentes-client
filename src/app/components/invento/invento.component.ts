import { Component, HostBinding, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SpinnerService } from 'src/app/services/spinner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';
import { RegionService } from 'src/app/services/region.service';
import Pais from 'src/app/model/Pais';
import Region from 'src/app/model/Region';
import { Router, ActivatedRoute } from '@angular/router';
import { InventoService } from 'src/app/services/invento.service';


@Component({
  selector: 'app-inventor',
  templateUrl: './invento.component.html',
  styleUrls: ['./invento.component.css']
})
export class InventorComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  inventos:any = [];
  filterInvento:string = '';
  constructor(private inventoService:InventoService, private spinnerService:SpinnerService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.spinnerService.getSpinner();
    this.inventoService.getAll().subscribe(
      res => {
        this.inventos = res;
        this.spinnerService.stopSpinner();
      },
      err =>{
        console.error(err);
        this.spinnerService.stopSpinner();
      }
    );
  }

  updateElement(id:string){
    this.router.navigate([`edit-invento/${id}`]);
  }

}
