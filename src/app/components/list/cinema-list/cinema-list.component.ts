import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {

  constructor() { }
  cinemaList = [
    { name: 'Cinema1', location: 'Cairo', numberOfMovies: 5 },
    { name: 'Cinema2', location: 'Alex', numberOfMovies: 3 },
    { name: 'Cinema3', location: 'Giza', numberOfMovies: 2 },
    { name: 'Cinema4', location: 'Suez', numberOfMovies: 4 },
    { name: 'Cinema5', location: 'Dubai', numberOfMovies: 1 },
  ];


  ngOnInit() {
  }

}
