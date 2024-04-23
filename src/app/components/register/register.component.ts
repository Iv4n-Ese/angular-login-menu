import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerUser: FormGroup;

  constructor(
    private fb:FormBuilder,
    private router: Router
  ){
    this.registerUser = this.fb.group({
      userNew: ['', Validators.required],
      emailNew: ['', Validators.required],
      passwordNew: ['', Validators.required],
      passwordRepeat: ['', Validators.required]
    });

  
  }

  register(){
    //console.log(this.registerUser);
    //console.log(this.registerUser.get('userNew'));
    if(this.registerUser.invalid){
      // valida si los campos estan vacios sin importar que selecciono alguno
      Object.values(this.registerUser.controls).forEach(control=>{
        control.markAllAsTouched();
      })
    }else{
      //alert("Se ha enviado los datos");
      //console.log(this.loginUsuario.value);
      this.router.navigate(['/']);
    }
  }
}
