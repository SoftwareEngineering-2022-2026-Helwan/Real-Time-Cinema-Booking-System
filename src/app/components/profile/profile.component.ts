import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,ValidationErrors, Validators, ValidatorFn,AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PersonService } from 'src/app/services/person/person.service';
import { vendorGuard } from '../../services/auth/guards.guard';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    isViewMode: boolean;
    showPass: Boolean = false;
    
  isLoggedIn:boolean = false;
  isVendor: boolean = false;
  isAdmin: boolean = false;


    data: {
      fname: string;
      lname: string;
      password?: string|null;
      phone: string;
      email: string;
    }={
      fname: 'john',
      lname: 'go',
      phone: '123',
      email: 'j@ma',
    };
  constructor(private fb: FormBuilder, private profileService: PersonService, private auth: AuthService) {
    this.auth.isLogged().subscribe((isAuthenticated) => {
      this.isLoggedIn = isAuthenticated;
      this.isVendor = this.auth.isVendor();
      this.isAdmin = this.auth.isAdmin();
    });
    this.isViewMode = true;
    this.signupForm.disable();
  }

  
  signupForm : FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    fname : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    lname : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    password : new FormControl(null),
    phone : new FormControl(null,[Validators.required]),
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


  submitSignupForm(){
    let form = this.signupForm;
    // console.log(form.value);
    this.profileService.updateProfile(form.value).subscribe((res:any) => {
        // console.log("updated: ",res);
        this.auth.setToken(res.token);
        this.isViewMode = true;
        this.signupForm.disable();
        form.value.password = null; 
        this.signupForm.reset(form.value);
        this.displayLoader();
    })
  }

  ngOnInit() {
    this.profileService.getProfile().subscribe((res:any) => {
        // console.log(res);
        if(res.status == "success"){
            this.data = {
                fname: res.data.user.fname,
                lname: res.data.user.lname,
                password: "********",
                phone: res.data.user.phone,
                email: res.data.user.email
            };
        }
        this.signupForm.setValue(this.data);
    })
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

 
}

