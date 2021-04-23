import { Component, HostBinding, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  paises:any = [];
  filterCountry:string = '';
  constructor(private paisesService:PaisService, private spinnerService:SpinnerService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.spinnerService.getSpinner();
    this.paisesService.getAll().subscribe(
      res => {
        this.paises = res;
        this.spinnerService.stopSpinner();
      },
      err =>{
        console.error(err);
        this.spinnerService.stopSpinner();
      }
    );
  }

  deleteElement(id:string){
    Swal.fire({
      title: '¿Está seguro de borrar este país?',
      showDenyButton: true,
      confirmButtonText: `Sí`,
      denyButtonText: `No`,
      icon:'question'
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinnerService.getSpinner();
        this.paisesService.delete(id).subscribe(
          res =>{
            this.getAll();
            this.spinnerService.stopSpinner();
            Swal.fire('¡Borrado exitosamente!', '', 'success');
          },
          err=>{
            console.log(err);
            this.spinnerService.stopSpinner();
            Swal.fire('Error de servidor', `<strong>
            Ocurrio un error al comunicarse con el servidor, por favor, <br>
            intentelo mas tarde.
            </strong>`, 'error');
          }
        );
      } else if (result.isDenied) {
        Swal.fire('No se borrará ningun registro.', '', 'info')
      }
    })
  }

  updateElement(){

  }

}
