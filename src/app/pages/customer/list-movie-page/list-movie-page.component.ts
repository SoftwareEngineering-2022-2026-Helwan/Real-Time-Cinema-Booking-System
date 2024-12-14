import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import { MovieService } from '../../../services/movie/movie.service';
import { CinemaService } from 'src/app/services/cinema/cinema.service';

@Component({
  selector: 'app-list-movie-page',
  templateUrl: './list-movie-page.component.html',
  styleUrls: ['./list-movie-page.component.css']
})
export class ListMoviePageComponent implements OnInit {

  selectedValue: string = "";

  constructor(private movieService: MovieService, private cinemaService: CinemaService) { }

  searchForm : FormGroup = new FormGroup({
    searchHeader : new FormControl(""),
    searchFilter : new FormControl(""),
  })

  cinemas: any[] = [
    {value:"Cinema1"},
    {value:"Cinema2"},
    {value:"Cinema3"},
    {value:"Cinema4"},
    {value:"Cinema5"},
  ];

  fillter()
  {
    console.log(this.selectedValue);
    this.movieService.filter.next(this.selectedValue);
  }
  ngOnInit() {
    this.cinemaService.getCinemas().subscribe((res:any) => {
        console.log(res);
        this.cinemas = res.map((cinema:any) => {
            return {value: cinema.name};
        })
    })
  }

  submitSearchForm(form : FormGroup){
    console.log(form.value);
    
    console.log(form.value.searchHeader);
    this.movieService.search.next(form.value.searchHeader);
    

    }

  
}
