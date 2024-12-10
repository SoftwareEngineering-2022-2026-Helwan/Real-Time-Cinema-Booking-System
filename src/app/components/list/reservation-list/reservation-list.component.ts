import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  constructor() { }
  reservations = [
    {
      movie: 'Inception',
      showTime: '7:00 PM',
      reservationNumber: '1ad4da',
      seats: ['A1', 'A2'],
      total: 50,
    },
    {
      movie: 'The God father',
      showTime: '9:00 PM',
      reservationNumber: '2bc5fe',
      seats: ['B3', 'B4'],
      total: 60,
    },
  ];


  ngOnInit() {
  }

}
