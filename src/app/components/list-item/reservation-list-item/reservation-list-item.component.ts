import { Component, OnInit , Input} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-reservation-list-item',
  templateUrl: './reservation-list-item.component.html',
  styleUrls: ['./reservation-list-item.component.css']
})
export class ReservationListItemComponent implements OnInit {

  constructor(private reservationService: ReservationService, private auth: AuthService) { }
  @Input() reservation!: any;


  cancelReservation(reservationNumber : number) {
    console.log("canceled!", reservationNumber);
    this.reservationService.cancelReservation(reservationNumber).subscribe(res =>{ console.log(res);
        let id = this.auth.decodeToken().id;
        this.reservationService.getReservationList(id);
    });
  }


  ngOnInit() {
  }

}
