import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm : FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required, Validators.pattern(/^[A-Za-z]\w{7,14}[0-9]$/),
      Validators.minLength(8),Validators.maxLength(15)])
  })

  showLoader : boolean = false;

  displayLoader(){
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 3000);
  }


  submitLoginForm(form : FormGroup){
    console.log(form.value);
  }

  ngOnInit() {
  }

}
