import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SpinnerService } from 'src/app/services/spinner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';
import { RegionService } from 'src/app/services/region.service';
import Pais from 'src/app/model/Pais';
import Region from 'src/app/model/Region';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfesioalService } from 'src/app/services/profesioal.service';
import { InventorService } from 'src/app/services/inventor.service';
import Invento from 'src/app/model/Invento';
import { InventoService } from 'src/app/services/invento.service';

@Component({
  selector: 'app-invento-form',
  templateUrl: './invento-form.component.html',
  styleUrls: ['./invento-form.component.css']
})
export class InventoFormComponent implements OnInit {

  public id:string;
  public registerForm: FormGroup;  
  inventores:any = [];
  paises:any = [];
  profesionales:any = [];
  edit:boolean = false; 

  invento:Invento = {
    id_invento:'',
    nombre_invento:'',
    anio:'',
    nombre_pais:'',
    nombre_profesional:'',
    nombre_inventor:''
  }

  constructor(private paisesService:PaisService, private fb:FormBuilder, 
    private spinner:SpinnerService, private router:Router,
    private activedRoute:ActivatedRoute, private profesionalService:ProfesioalService,
    private inventorService:InventorService, private inventoService:InventoService) { }

  ngOnInit(): void {
    this.initForm();
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.spinner.getSpinner();
      this.id = params.id;
      this.paisesService.getAll().subscribe(
        res=>{
          this.paises = res;
          this.profesionalService.getAll().subscribe(
            res=>{
              this.profesionales = res;
              this.inventoService.getOne(this.id).subscribe(
                res=>{
                  const e = res as Invento;
                  this.invento = res;
                  this.inventorService.getAll().subscribe(
                    res=>{
                      this.inventores = res;
                      this.registerForm.patchValue(this.invento);
                      this.spinner.stopSpinner();
                    },
                    err =>{console.log(err)}
                  );
                },err=>{console.log(err)}
              );
            },
            err =>{console.log(err)}
          );
        },
        err=>{
          console.log(err);
        }
      );
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

  async onSaveData(){
    this.onEditData();
  }

  async onEditData():Promise<void>{
    console.log(this.registerForm.valid);
    if (this.registerForm.valid){
      const formValues = this.registerForm.value;
      delete this.invento.nombre_inventor;
      delete this.invento.nombre_profesional;
      delete this.invento.nombre_pais;
      delete this.invento.id_invento;
      this.invento.nombre_invento = formValues.nombre_invento;
      this.invento.anio = formValues.anio;
      this.invento.id_pais = this.getidPais(formValues.nombre_pais);
      this.invento.id_inventor = this.getidInventor(formValues.nombre_inventor);
      this.invento.id_profesional = this.getidProfesional(formValues.nombre_profesional);
      this.spinner.getSpinner()
      this.inventoService.update(this.id, this.invento).subscribe(
        res=>{
          this.spinner.stopSpinner();    
          Swal.fire('Invento editado', `<strong>
          El invento ha sido editado correctamente.
          </strong>`, 'success');
          this.registerForm.reset();
          this.router.navigate(['/inventos']);
        },
        err =>{
          this.spinner.stopSpinner();
          Swal.fire('Error de servidor', `<strong>
          Ocurrio un error al comunicarse con el servidor, por favor, <br>
          intentelo mas tarde.
          </strong>`, 'error');
        }
      )
    }
    else{
      Swal.fire('Campos incorrectos', `<strong>
      Por favor, llene todos los campos de manera correcta.
      </strong>`, 'error');
    }
  }

  getidPais(nombre_pais:string):string{
    var id:string;
    this.paises.forEach(element => {
      if(element != null || element != undefined){
        if (element.nombre_pais.trim().toLowerCase() == nombre_pais.trim().toLowerCase()){
          id = element.id_pais;
        }
      }
    });
    return id;
  }

  getidInventor(nombre_inventor:string):string{
    var id:string;
    this.inventores.forEach(element => {
      if(element != null || element != undefined){
        if (element.nombre_inventor.trim().toLowerCase() == nombre_inventor.trim().toLowerCase()){
          id = element.id_inventor;
        }
      }
    });
    return id;
  }

  getidProfesional(nombre_profesional:string):string{
    var id:string;
    this.profesionales.forEach(element => {
      if(element != null || element != undefined){
        if (element.nombre_profesional.trim().toLowerCase() == nombre_profesional.trim().toLowerCase()){
          id = element.id_profesional;
        }
      }
    });
    return id;
  }

  validField(fieldName:string):string{
    const validatedField = this.registerForm.get(fieldName);
    return (!validatedField?.valid && validatedField?.touched)
    ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  private initForm():void{
    this.registerForm = this.fb.group({
      // Estructura [valor inicial, validaciones  ]
      nombre_invento: ['', [Validators.required]],
      anio: ['', [Validators.required]],
      nombre_pais: ['', [Validators.required]],
      nombre_profesional: ['', [Validators.required]],
      nombre_inventor: ['', [Validators.required]],
    });
  }

}
