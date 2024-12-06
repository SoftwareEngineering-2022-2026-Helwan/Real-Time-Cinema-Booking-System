import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit,OnDestroy {

  constructor() { }
  feedbackForm : FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    feedback : new FormControl(null,[Validators.required])
  })

  showLoader : boolean = false;

  timer : any;

  displayLoader(){
    this.showLoader = true;
    this.timer = setTimeout(() => {
      this.showLoader = false;
    }, 3000);

  }

  submitFeedbackForm(form : FormGroup){
    console.log(form.value);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

}
