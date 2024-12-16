import { Component, OnInit , Input} from '@angular/core';
import { CinemaService } from 'src/app/services/cinema/cinema.service';

@Component({
  selector: 'app-cinema-list-item',
  templateUrl: './cinema-list-item.component.html',
  styleUrls: ['./cinema-list-item.component.css']
})
export class CinemaListItemComponent implements OnInit {

  constructor(private cinemaService: CinemaService) { }

  @Input()  cinemaList: any[] = [];
  displayedColumns = ['name', 'location', 'numberOfMovies', 'action'];
  editCinema(cinemaName: string) {
    console.log("edit ",cinemaName);
  }

  ngOnInit() {
  }

}
