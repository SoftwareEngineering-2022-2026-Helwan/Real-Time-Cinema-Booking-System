import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,ValidationErrors, Validators, ValidatorFn,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    isViewMode: boolean;
    showPass: Boolean = false;
    

    data = {
        fname: 'John',
        lname: 'Doe',
        pass: '********',
        phone: '20123456781',
        email: 'test@gmail.com',
    }
  constructor(private fb: FormBuilder) {
    this.isViewMode = true;
    this.signupForm.disable();
  }

  
  signupForm : FormGroup = new FormGroup({
    email : new FormControl(this.data.email,[Validators.required,Validators.email]),
    fname : new FormControl(this.data.fname,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    lname : new FormControl(this.data.lname,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    password : new FormControl(this.data.pass,[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    Validators.minLength(8),Validators.maxLength(15)]),
    phone : new FormControl(this.data.phone,[Validators.required,Validators.minLength(11), Validators.maxLength(13)]),
  })
  
  resetForm() {
    this.signupForm.reset(this.data);
    this.displayLoader();
    this.toggleEdit();
  }

  cancelEdit()
  {
    this.resetForm();
  }


  toggleEdit()
  {
    this.displayLoader(); 
    this.isViewMode = !this.isViewMode;
    this.isViewMode ? this.signupForm.disable() : this.signupForm.enable();

  }
  showLoader : boolean = false;

  timer : any;

  displayLoader(){
    this.showLoader = true;
    this.timer = setTimeout(() => {
      this.showLoader = false;
    }, 1000);

  }

  displayPass(){
    this.showPass = !this.showPass;
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

