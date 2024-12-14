
import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  showPass: Boolean = false;
    isError: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  loginForm : FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required,])
  })

  showLoader : boolean = false;

  timer : any;

  displayLoader(){
    this.showLoader = true;
    this.timer = setTimeout(() => {
      this.showLoader = false;
    }, 3000);

  }

  displayPass(){
    this.showPass = !this.showPass;
  }

  resTime : any;

  isFail: boolean = false;

  submitLoginForm(form : FormGroup){
    this.displayLoader();
    // console.log(form.value);
    let data = {
      email : form.value.email,
      password : form.value.password
    };

    this.auth.authState.subscribe((res) => {
      if(res){
        this.isError = false;
      }else{
          this.isError = true;
        }
        this.isFail = !res;
      
    //   console.log("error: ",this.isError);
      this.resTime = setTimeout(() => {
        // console.log("error: ",this.isError);
        if(this.isError){
          this.loginForm.reset();
          return;
        }

        let token = this.auth.decodeToken();
        
        switch(token.role){
          case 'admin' : this.router.navigateByUrl('/admin'); break;
          case 'vendor' : this.router.navigateByUrl('/vendor'); break;
          case 'customer' : this.router.navigateByUrl('/customer'); break;
        }

    },1);
    });
    
    this.auth.login(data.email,data.password);

    
    
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    clearTimeout(this.timer);
    clearTimeout(this.resTime);
  }

}
