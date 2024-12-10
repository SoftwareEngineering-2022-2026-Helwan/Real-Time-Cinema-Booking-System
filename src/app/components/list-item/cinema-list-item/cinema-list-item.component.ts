import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-cinema-list-item',
  templateUrl: './cinema-list-item.component.html',
  styleUrls: ['./cinema-list-item.component.css']
})
export class CinemaListItemComponent implements OnInit {

  constructor() { }

  @Input()  cinemaList: any[] = [];
  editCinema(cinemaName: string) {
    console.log("edit ",cinemaName);
  }

  ngOnInit() {
  }

}
