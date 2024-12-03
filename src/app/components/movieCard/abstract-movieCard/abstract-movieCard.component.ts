import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-abstract-movieCard',
  templateUrl: './abstract-movieCard.component.html',
  styleUrls: ['./abstract-movieCard.component.css']
})
export class AbstractMovieCardComponent implements OnInit {

  constructor() { }

@Input() movie !: Movie;

viewMovie(movie: Movie) {
  console.log(movie.id);
}

  ngOnInit() {
  }

}
