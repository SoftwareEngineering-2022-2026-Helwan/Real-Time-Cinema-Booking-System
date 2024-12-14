import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Seat } from 'src/app/interfaces/seat.interface';
import { ShowTimes } from 'src/app/interfaces/showtime.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit, OnDestroy {

    reserve(seat: Seat) 
    {
        let index = (this.reservation.seatsByShowtime.find(showtime => showtime.id == this.showtime.id)?.seats?.indexOf(seat.id)) ?? 0;
        let reservtion = {
            showtime: this.showtime?.id,
            seatNumber: seat.id,
            userID: this.userReservation.userID
        };
        this.reservation.reserve(reservtion);
        this.reservation.isSeatReserved(reservtion);
        this.reservation.reservationResponse.subscribe(res => {
            
            if(reservtion.seatNumber != res.message.seatNumber)
                return;

            console.log(res);
            // this.userReservation.seatReserved = //get request for this user reservation for this showtime 
            // this.userReservation.seatReserved.includes(res.seatNumber) ? this.userReservation.seatReserved.splice(this.userReservation.seatReserved.indexOf(res.seatNumber),1) : this.userReservation.seatReserved.push(res.seatNumber);
            this.showtime = this.reservation.seatsByShowtime.find(showtime => showtime.id == this.showtime?.id) ?? { id: 1, showtime: '10:00', cinemaID: 1, movieID: 1, seats: [] };
            this.userReservation.seatReserved = this.reservation.seatsByShowtime.find(showtime => showtime.id == this.showtime?.id)?.seats ?? [];
            seat.isFree = !seat.isFree;
            console.log(`Seat ID: ${seat.id} reserved, ${seat.price}`);
            console.log("current userReservation : ",this.userReservation.seatReserved)
            console.log("current showtime : ",this.showtime);
            console.log("===================================")
        })
    }
    
    @Input() seat!: any;
    @Input() showtime!: any ;
    constructor(private reservation: ReservationService, private auth: AuthService) {
    }
    userReservation!: {
        userID: number;
        seatReserved:  string [];
    };
    ngOnInit() {
        
        this.reservation.listenTo(this.showtime?.id, this.seat.id);
        this.userReservation = {
            userID: this.auth.decodeToken().id,
            seatReserved: this.reservation.seatsByShowtime.find(showtime => showtime.id == this.showtime?.id)?.seats ?? []
        };
        console.log("curr st id: ",this.showtime?.id);
        this.reservation.selectedShowTime.subscribe((showtime: any) => {
            this.reservation.getSeatsByShowtime(showtime.id).subscribe((res: any) => {
                console.log("res : ",res)
            });
        })

    }



    ngOnDestroy(): void {
        this.reservation.client.unsubscribe(`st/${this.showtime?.id}/s/${this.seat.id}/response`);
    }
}
