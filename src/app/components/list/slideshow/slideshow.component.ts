import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  movies = [
    {image: '../../../../assets/imgs/postersH/1.jpg'},
    {image: '../../../../assets/imgs/postersH/2.jpg'},
    {image: '../../../../assets/imgs/postersH/3.jpg'},
    {image: '../../../../assets/imgs/postersH/4.jpg'},
    {image: '../../../../assets/imgs/postersH/5.jpg'}

  ];

 
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getSlideShow().subscribe((movies:any) => 
        {
            // console.log(movies);
            // this.movies = movies
            this.movies = movies.map(
            (movie:any) =>
            {
                let img ; 
                movie.Movies.forEach((details:any)=>{
                    // console.log(details.img);
                    img = {image: `${this.movieService.base}${details.img}`};
                });
                return img;
            }
            );
        }
    );
  }

}
