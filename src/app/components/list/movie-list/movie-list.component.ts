import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  movies: Movie[] = [
    {
      id: "1",
      name: 'Inception',
      src: '../../../../assets/imgs/posters/1.jpg',
      duration: '2h 28m',
      cinema: 'Cinema 1'
    },
    {
      id: "2",
      name: 'The Shawshank Redemption',
      src: '../../../../assets/imgs/posters/2.jpg',
      category: 'Drama',
      duration: '2h 22m',
      cinema: 'Cinema 2'
    },
    {
      id: "3",
      name: 'The Godfather',
      src: '../../../../assets/imgs/posters/3.jpg',
      category: 'Crime',
      duration: '3h 27m',
      cinema: 'Cinema 3'
    },
    {
      id: "4",
      name: 'The Dark Knight',
      src: '../../../../assets/imgs/posters/4.jpg',
      category: 'Action',
      duration: '2h 32m',
      cinema: 'Cinema 4'
    },
    {
      id: "5",
      name: '12 Angry Men',
      src: '../../../../assets/imgs/posters/5.jpg',
      category: 'Drama',
      duration: '1h 36m',
      cinema: 'Cinema 5'
    }
    ,
    {
      id: "1",
      name: 'Inception',
      src: '../../../../assets/imgs/posters/1.jpg',
      duration: '2h 28m',
      cinema: 'Cinema 1'
    },
    {
      id: "2",
      name: 'The Shawshank Redemption',
      src: '../../../../assets/imgs/posters/2.jpg',
      category: 'Drama',
      duration: '2h 22m',
      cinema: 'Cinema 2'
    },
    {
      id: "3",
      name: 'The Godfather',
      src: '../../../../assets/imgs/posters/3.jpg',
      category: 'Crime',
      duration: '3h 27m',
      cinema: 'Cinema 3'
    },
    {
      id: "4",
      name: 'The Dark Knight',
      src: '../../../../assets/imgs/posters/4.jpg',
      category: 'Action',
      duration: '2h 32m',
      cinema: 'Cinema 4'
    },
    {
      id: "5",
      name: '12 Angry Men',
      src: '../../../../assets/imgs/posters/5.jpg',
      category: 'Drama',
      duration: '1h 36m',
      cinema: 'Cinema 5'
    }
  ];

  ngOnInit() {
  }

}
