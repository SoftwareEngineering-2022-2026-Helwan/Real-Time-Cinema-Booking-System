import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movies = [
    {
      h_src: '../assets/imgs/postersH/1.jpg',
      name: 'The Dark Knight',
      category: 'Action',
      duration: '2h 32m',
      cinema: 'Cinema 1'
    },
    {
      h_src: '../assets/imgs/postersH/10.jpg',
      name: 'The Lord of the Rings: The Return of the King',
      category: 'Adventure',
      duration: '3h 21m',
      cinema: 'Cinema 2'
    },
    {
      h_src: 'https://pbs.twimg.com/media/Ei9Oka8WAAQ7j4j?format=jpg&name=large',
      name: 'Pulp Fiction',
      category: 'Crime',
      duration: '2h 34m',
      cinema: 'Cinema 3'
    }
  ];


}

