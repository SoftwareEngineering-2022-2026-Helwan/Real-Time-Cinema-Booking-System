import { Injectable } from '@angular/core';
import { ShowTimes } from '../../interfaces/showtime.interface';
import mqtt from 'mqtt';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

    client!: mqtt.MqttClient;
    seatsByShowtime: {id: number, seats: string[]}[]  = [
        {
            id: 1,
            seats: ["A11", "A12"]
        }
    ];

    reservationResponse: Subject<any> = new Subject<any>();
    
    showtimes: ShowTimes[]=
    [
        { id: 1, showtime: '10:00', cinemaID: 1, movieID: 1, seats: ["A1", "A2"] },
        { id: 2, showtime: '12:00', cinemaID: 1, movieID: 1, seats: ["B3", "B4"] },
        { id: 3, showtime: '14:00', cinemaID: 1, movieID: 1  },
    ];
    constructor() { 
        this.connect();
    }

    connect()
    {
        this.client = mqtt.connect('ws://localhost:8083');
        this.client.setMaxListeners(48);
        this.client.on('connect', () => {
            console.log('Connected to MQTT broker');
        })
    }

    listenTo(showtime: number, seat: string) {
        this.client.subscribe(`st/${showtime}/s/${seat}/response`);
        console.log(`Subscribed to st/${showtime}/s/${seat}/response`);
        this.client.on('message', (topic, message) => {
            if(topic == `st/${showtime}/s/${seat}/response`)
            {
                console.log("topic: ",topic);
                this.reservationResponse.next({topic,message:JSON.parse(message.toString())});
            }
        });
    }
    isSeatReserved(reservation: {showtime:number, seatNumber: string, userID: number})
    {
        //must make get request to update seatsByShowtime 
        this.reservationResponse.subscribe(res => {
            let showtime = this.seatsByShowtime.find(showtime => showtime.id == reservation.showtime);
            if(showtime)
            {
                if(reservation.seatNumber == res.message.seatNumber)
                    (res.message.userID == reservation.userID) && !(showtime.seats?.includes(res.message.seatNumber)) ? showtime.seats?.push(res.message.seatNumber) : showtime.seats?.splice(showtime.seats?.indexOf(res.message.seatNumber),1);
            }
            else
            {
                res.message.userID == reservation.userID ? this.seatsByShowtime.push({id: reservation.showtime, seats: [res.message.seatNumber]}) : console.log("2 seat not reserved in ", reservation);
            }
            let newShowTimeList = this.showtimes.find(showtime => showtime.id == reservation.showtime);
            newShowTimeList?.seats?.push(res.message.seatNumber);
        })
    }
    reserve(reservation: {showtime:number, seatNumber: string, userID: number}) {
        console.log("publish: ",reservation);
        this.client.publish(`st/${reservation.showtime}/s/${reservation.seatNumber}/request`, JSON.stringify(reservation));
    }
}
