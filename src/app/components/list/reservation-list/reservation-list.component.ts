import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  constructor(private reservationService: ReservationService,private auth: AuthService) {
      let id = this.auth.decodeToken().id;
      this.reservationService.reservationList.subscribe(res => {
          this.reservations = res;
          this.isEmpty = this.reservations.length == 0 ? true : false;
          console.log(this.reservations);
          console.log(this.isEmpty);
        });
        
    }
    reservations = [];
    
    isEmpty=false;
    
    ngOnInit() {
    let id = this.auth.decodeToken().id;
      this.reservationService.getReservationList(id);
    // console.log(id);
  }

}
