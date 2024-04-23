import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginUsuario: FormGroup;
  user: string | null;
  password: string | null;


  constructor(
    private fb:FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute
  ){
    this.loginUsuario = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
    
    this.user = this.aRouter.snapshot.paramMap.get('user');
    this.password = this.aRouter.snapshot.paramMap.get('password');

  }

  /*
  login(){
    
    console.log(this.loginUsuario);

    if(this.user?.valueOf.toString().trim() == '' && this.password?.valueOf.toString().trim() == ''){
      console.log("No paso");
    }else{
      this.router.navigate(['/selected']);
      console.log("Paso");
    }

    console.log(this.loginUsuario.get('user'));
  }
  */

  login(){
    //https://www.youtube.com/watch?v=PntKE4G4BbI min 15:35
    if(this.loginUsuario.invalid){
      // valida si los campos estan vacios sin importar que selecciono alguno
      Object.values(this.loginUsuario.controls).forEach(control=>{
        control.markAllAsTouched();
      });
  
    }else{
      //alert("Se ha enviado los datos");
      //console.log(this.loginUsuario.value);
      this.router.navigate(['/selected']);
    }
    
  }
}