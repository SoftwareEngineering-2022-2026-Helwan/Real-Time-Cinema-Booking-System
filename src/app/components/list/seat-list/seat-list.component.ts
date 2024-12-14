import { Component, Input, OnInit } from '@angular/core';
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

    @Input() showtimes!:any;
    currentShowtime!: ShowTimes;
    selectionChange(showtime: any)
    {
        // console.log(showtime);
        this.reservation.selectedShowTime.next(showtime);
        this.currentShowtime = showtime;
        this.seats = this.seats.map((seat) => (showtime.seats?.includes(seat.id) ? { ...seat, isFree: false } : { ...seat, isFree: true }));
    }
    
    seats: Seat[] = SEAT_DATA_SET;
    showTimes: ShowTimes[] = this.reservation.showtimes;
    
    
    
    


  constructor(private reservation: ReservationService) {
}

ngOnInit() {
    this.reservation.selectedShowTime.next(this.showtimes[0]);
    this.selectionChange(this.showtimes[0]);
}

checkout() {
    console.log(this.currentShowtime);
}

}
