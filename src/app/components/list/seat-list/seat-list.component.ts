import { Component, OnInit } from '@angular/core';
import { SEAT_DATA_SET } from 'src/app/data/seat.data';
import { Seat } from 'src/app/interfaces/seat.interface';
import { ShowTimes } from 'src/app/interfaces/showtime.interface';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.css'],
})
export class SeatListComponent implements OnInit {

    currentShowtime!: ShowTimes;
    selectionChange(showtime: ShowTimes)
    {
        console.log(showtime);
        this.currentShowtime = showtime;
        this.seats = this.seats.map((seat) => (showtime.seats?.includes(seat.id) ? { ...seat, isFree: false } : { ...seat, isFree: true }));
    }

    seats: Seat[] = SEAT_DATA_SET;
    showTimes: ShowTimes[] = this.reservation.showtimes;






  constructor(private reservation: ReservationService) {
    this.selectionChange(this.showTimes[0]);
  }

  ngOnInit() {
  }

  checkout() {
    console.log(this.currentShowtime);
  }

}
