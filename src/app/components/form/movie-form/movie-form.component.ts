import { Component, OnDestroy, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, ValidatorFn} from '@angular/forms'

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit, OnDestroy {

  constructor() { }

  movieForm : FormGroup = new FormGroup({
    title : new FormControl(null,[Validators.required]),
    category : new FormControl(null,[Validators.required]),
    duration : new FormControl(null,[Validators.required]),
    cinema : new FormControl(null,[Validators.required]),
    starring : new FormControl(null,[Validators.required]),
    image : new FormControl(null,[Validators.required]),
    description : new FormControl(null,[Validators.required])
  })

  cinemas : string[] = ["Cinema 1","Cinema 2","Cinema 3","Cinema 4"];

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

  submitMovieForm(form : FormGroup){
    console.log(form.value);
  }
  ngOnInit() {
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

}
