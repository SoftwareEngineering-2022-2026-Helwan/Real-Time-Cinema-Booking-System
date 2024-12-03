import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-detailed-movieCard',
  templateUrl: './detailed-movieCard.component.html',
  styleUrls: ['./detailed-movieCard.component.css']
})

/*

this component input came from url and services 
=========================
to display the card in good shape apply this css
.list
{
    margin: 5vh 0;
    padding: 0 10vw;
}

*/ 

export class DetailedMovieCardComponent implements OnInit {

  constructor() { }

  @Input() movie !: Movie;

  ngOnInit() {
  }

}
