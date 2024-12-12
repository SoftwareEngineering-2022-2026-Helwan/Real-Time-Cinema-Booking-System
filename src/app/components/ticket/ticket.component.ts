import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  id: string = "1";
  cinema: string = "Cinema 1";
  movie: string = "Movie 1";
  date: string = "Date 1";
  showtime: string = "Time 1";
  hall: string = "Hall 1";
  seats: string[] = ["A1 ", "A2 ", "A3 ", "A4 ", "A5 ", "A6 ", "A7 ", "A8 ", "A9 ", "A10 "];
  price: number = 899.50;

  constructor() { }

  ngOnInit() {
  }

}
