import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { window } from 'rxjs/operators';
import { SpinnerService } from 'src/app/services/spinner.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import  Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordType:string = 'password'
  private emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  public loginForm: FormGroup;  

  constructor(private fb:FormBuilder, 
    private spinner:SpinnerService, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onLogin(){
    if (this.loginForm.valid){
      const formValues = this.loginForm.value;
      try {
        this.spinner.getSpinner();
        if(this.usuarioService.login(formValues.email, formValues.password)){
          this.spinner.stopSpinner();
          location.pathname = '/paises';
        }else{
          Swal.fire('Credenciales incorrectas', `<strong>
          Las credenciales que proporciono no corresponden a ningun usuario registrado.
        </strong>`, 'error');
          this.spinner.stopSpinner();
        }
        
      } catch (error) {
        Swal.fire('Ocurrio un error', `<strong>
         Error al comunicarse con el servidor.
        </strong>`, 'error');
      }
    }
    else{
      Swal.fire('Campos incorrectos', `<strong>
      Por favor, llene todos los campos de manera correcta.
      </strong>`, 'error');
    }
  }

  isValidData():String{
    if (this.loginForm.valid){
      return 'btn-success';
    }
    else{
      return 'btn-danger';
    }
  }
  
  validField(fieldName:string):string{
    const validatedField = this.loginForm.get(fieldName);
    return (!validatedField?.valid && validatedField?.touched)
    ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  showPassword(){
    if (this.passwordType == 'text') {
        this.passwordType = 'password';
    }else{
      this.passwordType = 'text'
    }
  }

  private initForm():void{
    this.loginForm = this.fb.group({
      // Estructura [valor inicial, validaciones  ]
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
