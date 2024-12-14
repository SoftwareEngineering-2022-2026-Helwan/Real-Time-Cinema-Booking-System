import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../interfaces/movie.interface';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-detailed-movieCard',
  templateUrl: './detailed-movieCard.component.html',
  styleUrls: ['./detailed-movieCard.component.css']
})

/*

this component input came from url and services or from the reservation component
=========================
to display the card in good shape apply this css
.list
{
    margin: 5vh 0;
    padding: 0 10vw;
}

*/ 

export class DetailedMovieCardComponent implements OnInit {
base: any;

  constructor(private movieSrc: MovieService) {
    this.base = this.movieSrc.base;
   }

  @Input() movie !:any;

  ngOnInit() {
  }

}
