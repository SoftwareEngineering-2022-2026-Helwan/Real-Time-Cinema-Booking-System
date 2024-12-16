import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CinemaService } from 'src/app/services/cinema/cinema.service';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {

  constructor(private cinemaSrv: CinemaService, private auth: AuthService) { }
  cinemaList = [
    { name: 'Cinema1', location: 'Cairo', numberOfMovies: 5 },
    { name: 'Cinema2', location: 'Alex', numberOfMovies: 3 },
    { name: 'Cinema3', location: 'Giza', numberOfMovies: 2 },
    { name: 'Cinema4', location: 'Suez', numberOfMovies: 4 },
    { name: 'Cinema5', location: 'Dubai', numberOfMovies: 1 },
  ];


  ngOnInit() {
    this.cinemaSrv.getCinemasById(this.auth.decodeToken().id).subscribe((res:any )=> {
        console.log(res);
        // this.cinemaList = [...this.cinemaList, ...res];
    });
  }

}
