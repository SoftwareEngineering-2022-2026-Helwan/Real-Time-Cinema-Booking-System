
import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  showPass: Boolean = false;

  constructor() { }

  loginForm : FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      Validators.minLength(8),Validators.maxLength(15)])
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


  submitLoginForm(form : FormGroup){
    console.log(form.value);
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

}
