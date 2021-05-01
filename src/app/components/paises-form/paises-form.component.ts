import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SpinnerService } from 'src/app/services/spinner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';
import { RegionService } from 'src/app/services/region.service';
import Pais from 'src/app/model/Pais';
import Region from 'src/app/model/Region';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paises-form',
  templateUrl: './paises-form.component.html',
  styleUrls: ['./paises-form.component.css']
})
export class PaisesFormComponent implements OnInit {

  public id:string;
  public registerForm: FormGroup;  
  regiones:any = [];
  fronteras:any = [];
  pais:Pais = {
    id_pais:"",
    nombre_pais:"",
    poblacion:"",
    area:"",
    capital:"",
    id_region:"",
    nombre_region:""
  };
  region:Region ={
    id_region:"",
    nombre_region:""
  };
  edit:boolean = false; 

  constructor(private paisesService:PaisService, private fb:FormBuilder, 
    private spinner:SpinnerService, private regionService:RegionService, private router:Router,
    private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllRegiones();
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.id = params.id;
      this.edit = true;
      this.paisesService.getOne(params.id).subscribe(
        res=>{
          this.pais = res as any;
          this.registerForm.patchValue(this.pais);
          this.paisesService.getFronteras(this.id).subscribe(
            res=>{
              this.fronteras = res;
            },
            err=>{
              console.error(err);
            }
          );
        },
        err=>{
          console.log(err);
        }
      );
    }
  }

  async saveData():Promise<void>{
    if (this.registerForm.valid){
      const formValues = this.registerForm.value;
      delete this.region.id_region;
      delete this.pais.id_pais;
      delete this.pais.nombre_region;
      this.region.nombre_region = formValues.nombre_region;
      this.pais.nombre_pais = formValues.nombre_pais;
      this.pais.poblacion = formValues.poblacion;
      this.pais.area = formValues.area;
      this.pais.capital = formValues.capital;
      this.regionService.getByName(this.region).subscribe(
        res=>{
          this.pais.id_region = res[0].id_region
          try {
            this.spinner.getSpinner();
            this.paisesService.insert(this.pais).subscribe(
              res =>{
                this.spinner.stopSpinner();    
                Swal.fire('Pais registrado', `<strong>
                El pais ha sido registrado correctamente.
                </strong>`, 'success');
                this.registerForm.reset();
                this.router.navigate(['/paises']);
              },
              err=>{
                this.spinner.stopSpinner();
                Swal.fire('Error de servidor', `<strong>
                Ocurrio un error al comunicarse con el servidor, por favor, <br>
                intentelo mas tarde.
                </strong>`, 'error');
              }
            );
          } catch (error) {
            this.spinner.stopSpinner();
            Swal.fire('Error de servidor', `<strong>
            Ocurrio un error al comunicarse con el servidor, por favor, <br>
            intentelo mas tarde.
            </strong>`, 'error');
          }
        },
        err=>{console.log(err)}
      );
    }
    else{
      Swal.fire('Campos incorrectos', `<strong>
      Por favor, llene todos los campos de manera correcta.
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
      this.saveData()
    }else{
      this.onEditData();
    }
  }

  async onEditData():Promise<void>{
    if (this.registerForm.valid){
      const formValues = this.registerForm.value;
      delete this.region.id_region;
      delete this.pais.id_pais;
      delete this.pais.nombre_region;
      this.region.nombre_region = formValues.nombre_region;
      this.pais.nombre_pais = formValues.nombre_pais;
      this.pais.poblacion = formValues.poblacion;
      this.pais.area = formValues.area;
      this.pais.capital = formValues.capital;
      this.regionService.getByName(this.region).subscribe(
        res=>{
          this.pais.id_region = res[0].id_region
          try {
            this.spinner.getSpinner();
            this.paisesService.update(this.id, this.pais).subscribe(
              res =>{
                this.spinner.stopSpinner();    
                Swal.fire('Pais editado', `<strong>
                El pais ha sido editado correctamente.
                </strong>`, 'success');
                this.registerForm.reset();
                this.router.navigate(['/paises']);
              },
              err=>{
                this.spinner.stopSpinner();
                Swal.fire('Error de servidor', `<strong>
                Ocurrio un error al comunicarse con el servidor, por favor, <br>
                intentelo mas tarde.
                </strong>`, 'error');
              }
            );
          } catch (error) {
            this.spinner.stopSpinner();
            Swal.fire('Error de servidor', `<strong>
            Ocurrio un error al comunicarse con el servidor, por favor, <br>
            intentelo mas tarde.
            </strong>`, 'error');
          }
        },
        err=>{console.log(err)}
      );
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
      nombre_pais: ['', [Validators.required]],
      poblacion: ['', [Validators.required]],
      area: ['', [Validators.required]],
      capital: ['', [Validators.required]],
      nombre_region: ['', [Validators.required]]
    });
  }

  getAllRegiones(){
    this.spinner.getSpinner();
    this.regionService.getAll().subscribe(
      res=>{this.regiones = res
      this.spinner.stopSpinner()},
      err=>{console.error(err)
      this.spinner.stopSpinner()}
    );
  }
}
