import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,ValidationErrors, Validators, ValidatorFn,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 active: boolean = true;
 showPass: Boolean = false;
 myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fname: new FormControl('John'),
      lname: new FormControl('Smith'),
      pass: new FormControl('123456'),
      phone: new FormControl('+20************'),
      email: new FormControl('test@gmail.com'),
    });
  }

  
  signupForm : FormGroup = new FormGroup({
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
  resetForm() {
    this.myForm.reset({
      fname: '',
      lname: '',
      pass: '',
      phone: '',
      email: ''
    });
  }
 
}

