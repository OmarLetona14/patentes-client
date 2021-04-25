import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Encuesta from 'src/app/model/Encuesta';
import Pregunta from 'src/app/model/Pregunta';
import Respuesta from 'src/app/model/Respuesta';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { RespuestaService } from 'src/app/services/respuesta.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntas-form',
  templateUrl: './preguntas-form.component.html',
  styleUrls: ['./preguntas-form.component.css']
})
export class PreguntasFormComponent implements OnInit {

  public id:string;
  public registerForm: FormGroup;  
  respuestas:any = [];
  respuesta_correcta:string;
  encuestas:any = [];
  pregunta:Pregunta = {
    id_pregunta:"",
    contenido:"",
    id_encuesta:"",
    nombre_encuesta:"",
    id_respuesta_correcta:"",
    id_respuesta:"",
    respuesta:"",
    inciso:""
  };
  pmodel:Pregunta = {
    id_pregunta:"",
  };
  respuesta:Respuesta ={
    id_respuesta:"",
    respuesta:"",
    inciso:"",
    id_pregunta:""
  };
  edit:boolean = false; 

  constructor(private preguntaService:PreguntaService, private fb:FormBuilder, private respuestaService:RespuestaService,
    private spinner:SpinnerService, private router:Router, private encuestaService:EncuestaService,
    private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.id = params.id;
      this.edit = true;
      this.preguntaService.getOne(params.id).subscribe(
        res=>{
          this.pregunta = res as any;
          this.registerForm.patchValue(this.pregunta);
          this.encuestaService.getAll().subscribe(
            res=>{
              this.encuestas = res as any;
              const params = this.activedRoute.snapshot.params;
              this.spinner.getSpinner();
              console.log(params.id);
              this.pmodel.id_pregunta = params.id;
              this.respuestaService.getByPregunta(this.pmodel).subscribe(
                res=>{
                  this.respuestas = res as any;
                  this.respuesta_correcta = this.pregunta.inciso + " . " + this.pregunta.respuesta; 
                  this.spinner.stopSpinner();
                },
                err=>{
                  console.log(err);
                  this.spinner.stopSpinner();
                }
              );
            },
            err =>{
              console.log(err);
              Swal.fire('Error de servidor', `<strong>
                Ocurrio un error al comunicarse con el servidor, por favor, <br>
                intentelo mas tarde.
                </strong>`, 'error');
            }
          );
        },
        err=>{
          console.log(err);
          Swal.fire('Error de servidor', `<strong>
                Ocurrio un error al comunicarse con el servidor, por favor, <br>
                intentelo mas tarde.
                </strong>`, 'error');
        }
      );
    }else{
      this.spinner.getSpinner();
      this.encuestaService.getAll().subscribe(
        res=>{
          this.encuestas = res as any;
          this.spinner.stopSpinner();
        },
        err =>{
          console.log(err);
        }
      );
    }
  }

  async saveData():Promise<void>{
    
   try {
    const formValues = this.registerForm.value;
    this.pregunta.contenido = formValues.contenido;
    this.spinner.getSpinner();
    console.log(formValues.nombre_encuesta);
    this.encuestaService.getByName(formValues.nombre_encuesta.toString().trim()).subscribe(
      res =>{
        console.log(res);
        const e = res as Encuesta;
        this.pregunta.id_encuesta = e.id_encuesta;
        this.preguntaService.insert(this.pregunta).subscribe(
          res=>{
            this.spinner.stopSpinner();    
              Swal.fire('Pregunta registrada', `<strong>
              La pregunta se ha sido registrado correctamente.
              </strong>`, 'success');
              this.registerForm.reset();
              this.router.navigate(['/preguntas']);
              
          },
          err =>{
            console.log(err);
            this.spinner.stopSpinner();
            Swal.fire('Error de servidor', `<strong>
              Ocurrio un error al comunicarse con el servidor, por favor, <br>
              intentelo mas tarde.
              </strong>`, 'error');
          }
        );
      },
      err=>{
        console.log(err);
        this.spinner.stopSpinner();
        Swal.fire('Error de servidor', `<strong>
              Ocurrio un error al comunicarse con el servidor, por favor, <br>
              intentelo mas tarde.
              </strong>`, 'error');
      }
    );
   } catch (error) {
    console.log(error);
    this.spinner.stopSpinner();
    Swal.fire('Error de servidor', `<strong>
          Ocurrio un error al comunicarse con el servidor, por favor, <br>
          intentelo mas tarde.
          </strong>`, 'error');
   }
  }

  isValidData():String{
    if (this.registerForm.valid){
      return 'btn-success';
    }
    else{
      return 'btn-warning';
    }
  }

  async onSaveData():Promise<void>{
    if(!this.edit){
      this.saveData();
    }else{
      this.onEditData();
    }
  }

  async onEditData():Promise<void>{
    if (this.registerForm.valid){
    }
    else{
      Swal.fire('Campos incorrectos', `<strong>
      Por favor, llene todos los campos de manera correcta.
      </strong>`, 'error');
    }
  }

  validField(fieldName:string):string{
    const validatedField = this.registerForm.get(fieldName);
    return (!validatedField?.valid && validatedField?.touched)
    ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  private initForm():void{
    this.registerForm = this.fb.group({
      // Estructura [valor inicial, validaciones  ]
      contenido: ['', [Validators.required]],
      nombre_encuesta: ['', [Validators.required]],
    });
  }

  getAllRespuestas(){
    const params = this.activedRoute.snapshot.params;
    this.spinner.getSpinner();
    this.respuestaService.getByPregunta(params.id).subscribe(
      res=>{
        this.respuestas = res as any;
        this.spinner.stopSpinner();
      },
      err=>{
        console.log(err);
        this.spinner.stopSpinner();
      }
    );
  }

}
