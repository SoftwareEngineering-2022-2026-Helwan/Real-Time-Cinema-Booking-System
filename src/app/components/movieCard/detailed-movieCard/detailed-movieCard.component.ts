import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-detailed-movieCard',
  templateUrl: './detailed-movieCard.component.html',
  styleUrls: ['./detailed-movieCard.component.css']
})
export class DetailedMovieCardComponent implements OnInit {

  constructor() { }

  @Input() movie !: Movie;

  ngOnInit() {
  }

}
