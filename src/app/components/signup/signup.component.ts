import { Component, OnDestroy, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, ValidatorFn} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {

  showPass: Boolean = false;
  showVerifyPass: Boolean = false;

  constructor() { }

  signupForm : FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    fname : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    lname : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    password : new FormControl(null,[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      Validators.minLength(8),Validators.maxLength(15)]),
    verifyPassword : new FormControl(null,[Validators.required]),
    phone : new FormControl(null,[Validators.required,Validators.minLength(11), Validators.maxLength(13)]),
  },
  { validators: this.passwordMatchValidator() })

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
  displayVerifyPass(){
    this.showVerifyPass = !this.showVerifyPass; 
  }

  passwordMatchValidator(pass = 'password', confirmPass = 'verifyPassword'): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(pass)?.value;
      const confirmPassword = formGroup.get(confirmPass)?.value;
  
      // Check if passwords match
      const isMatch = password === confirmPassword;
  
      // Set or clear error on the confirmPass control
      const confirmPasswordControl = formGroup.get(confirmPass);
      if (confirmPasswordControl) {
        if (!isMatch) {
          confirmPasswordControl.setErrors({ passwordNotMatch: true });
        } else {
          if (confirmPasswordControl.hasError('passwordNotMatch')) {
            confirmPasswordControl.setErrors(null);
          }
        }
      }
  
      // Optionally set error on the formGroup itself
      return isMatch ? null : { passwordNotMatch: true };
    };
  }
  

  submitSignupForm(form : FormGroup){
    console.log(form.value);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

}
