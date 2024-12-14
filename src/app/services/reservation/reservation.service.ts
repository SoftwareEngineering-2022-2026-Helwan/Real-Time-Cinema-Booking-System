import { Injectable } from '@angular/core';
import { ShowTimes } from '../../interfaces/showtime.interface';
import mqtt from 'mqtt';
import { Subject, SubjectLike } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

    api = 'http://localhost:8081/api';
    client!: mqtt.MqttClient;
    selectedShowTime: Subject<any> = new Subject<any>();

    seatsByShowtime: {id: number, seats: string[]}[]  = [
        {
            id: 1,
            seats: ["A11", "A12"]
        }
    ];

    reservationList: Subject<any> = new Subject<any>();
    reservationResponse: Subject<any> = new Subject<any>();
    
    showtimes: ShowTimes[]=
    [
        { id: 1, showtime: '10:00', cinemaID: 1, movieID: 1, seats: ["A1", "A2"] },
        { id: 2, showtime: '12:00', cinemaID: 1, movieID: 1, seats: ["B3", "B4"] },
        { id: 3, showtime: '14:00', cinemaID: 1, movieID: 1  },
    ];
    constructor(private http:HttpClient) { 
        this.connect();
    }

    getReservationList(id: number)
    {
        this.http.get(`${this.api}/reservation/showReservations/${id}`, {headers: {"Authorization": `Bearer ${sessionStorage.getItem('token')}` }}).subscribe((res:any) => this.reservationList.next(res));
    }
    getSeatsByShowtime(id: number)
    {
        return this.http.get(`${this.api}/reservation/getReservation/${id}`, {headers: {"Authorization": `Bearer ${sessionStorage.getItem('token')}` }});
    }
    cancelReservation(id: number)
    {
        return this.http.delete(`${this.api}/reservation/canncelReservation/${id}`, {headers: {"Authorization": `Bearer ${sessionStorage.getItem('token')}` }});
        // this.http.get(`${this.api}/reservation/showReservations/${id}`, {headers: {"Authorization": `Bearer ${sessionStorage.getItem('token')}` }}).subscribe((res:any) => {
        //     this.reservationList.next(res);
        //     console.log(res);   
        // });
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
        // console.log(`Subscribed to st/${showtime}/s/${seat}/response`);
        this.client.on('message', (topic, message) => {
            if(topic == `st/${showtime}/s/${seat}/response`)
            {
                // console.log("topic: ",topic);
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
