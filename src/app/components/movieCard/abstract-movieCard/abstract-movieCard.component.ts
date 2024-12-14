import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../interfaces/movie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abstract-movieCard',
  templateUrl: './abstract-movieCard.component.html',
  styleUrls: ['./abstract-movieCard.component.css']
})
export class AbstractMovieCardComponent implements OnInit {

  constructor(private router: Router) { }

@Input() movie !: Movie;

viewMovie(movie: Movie) {
  console.log(movie.id);
  this.router.navigate(['/reservation', movie.id]);
}

  ngOnInit() {
  }

}
