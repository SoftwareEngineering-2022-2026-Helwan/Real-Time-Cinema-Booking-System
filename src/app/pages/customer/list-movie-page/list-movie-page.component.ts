import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-movie-page',
  templateUrl: './list-movie-page.component.html',
  styleUrls: ['./list-movie-page.component.css']
})
export class ListMoviePageComponent implements OnInit {

  selectedValue: string = "";

  constructor() { }

  searchForm : FormGroup = new FormGroup({
    searchHeader : new FormControl(null),
    searchFilter : new FormControl(null),
  })

  cinemas: any[] = [
    {id: "c1", value:"Cinema1"},
    {id: "c2", value:"Cinema2"},
    {id: "c3", value:"Cinema3"},
    {id: "c4", value:"Cinema4"},
    {id: "c5", value:"Cinema5"},
  ];

  ngOnInit() {
  }

  submitSearchForm(form : FormGroup){
    console.log(form.value);
  }
}
