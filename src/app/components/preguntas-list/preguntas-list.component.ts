import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Respuesta from 'src/app/model/Respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { RespuestaService } from 'src/app/services/respuesta.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntas-list',
  templateUrl: './preguntas-list.component.html',
  styleUrls: ['./preguntas-list.component.css']
})
export class PreguntasListComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  preguntas:any = [];
  respuestas:any = [];
  filterQuestion:string = '';
  constructor(private preguntasService:PreguntaService, private spinnerService:SpinnerService,
    private router:Router, private respuestaService:RespuestaService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.spinnerService.getSpinner();
    this.preguntasService.getAll().subscribe(
      res => {
        this.preguntas = res;
        console.log(res);
        this.spinnerService.stopSpinner();
      },
      err =>{
        console.error(err);
        this.spinnerService.stopSpinner();
      }
    );
  }

  deleteElement(id:string){
    console.log(id);
    Swal.fire({
      title: '¿Está seguro de borrar este país?',
      showDenyButton: true,
      confirmButtonText: `Sí`,
      denyButtonText: `No`,
      icon:'question'
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinnerService.getSpinner();
        this.preguntasService.delete(id).subscribe(
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

  updateElement(id:string){
    this.router.navigate([`edit-pregunta/${id}`]);
  }
}
