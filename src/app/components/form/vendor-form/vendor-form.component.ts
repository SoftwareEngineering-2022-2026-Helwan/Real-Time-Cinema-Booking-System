import { Component, OnDestroy, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, ValidatorFn} from '@angular/forms'

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.css']
})
export class VendorFormComponent implements OnInit, OnDestroy {

  showPass: Boolean = false;

  constructor() { }

  VendorForm : FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    fname : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    lname : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    password : new FormControl(null,[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      Validators.minLength(8),Validators.maxLength(15)]),
    phone : new FormControl(null,[Validators.required,Validators.minLength(11), Validators.maxLength(13)]),
  })

  displayPass(){
    this.showPass = !this.showPass;
  }

  showLoader : boolean = false;
  showResetLoader : boolean = false;

  timer : any;

  ResetTimer : any;

  displayLoader(){
    this.showLoader = true;
    this.timer = setTimeout(() => {
      this.showLoader = false;
    }, 3000);
  }

  displayResetLoader(){
    this.showResetLoader = true;
    this.ResetTimer = setTimeout(() => {
      this.showResetLoader = false;
    }, 1000);
  }

  submitVendorForm(form : FormGroup){
    console.log(form.value);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

}
