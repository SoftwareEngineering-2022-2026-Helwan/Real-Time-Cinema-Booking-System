import random from 'random';
import axios from 'axios';
import {v4, v6}  from 'uuid';
import mqtt from 'mqtt';
import { IMoive, IReservation, ISeat, IShowTime } from './interfaces';
import { MOVIE_LIST } from './data.db';

const api = "http://localhost:8081/";
const mqttBroker = "mqtt://localhost:1883";
const client = mqtt.connect(mqttBroker);
/*
1) request movie list
2) select random movie 
3) select random showtime
4) select random seat
    4.1) try reservation request
        4.1.1) if success
            4.1.1.1) create reservation
        4.1.2) if fail
            4.1.2.1) go to step 4
5) request checkout 
    5.1) if there is no reservation
        5.1.1) go to step 3
    5.2) if there is reservation
        5.2.1) create checkout
*/


setInterval(main, 5000);

function main()
{
    let movie = getMovie(MOVIE_LIST);
    let showtime = getShowtime(movie);
    let seat = getSeat(showtime);
    let reservation = newReservation(movie, showtime, seat);
    
    
    if(random.int(0, 100) % 2 == 0)
    {
        let newReservation = reservation;
        newReservation.id = random.int(0, 100).toString();
        console.log(`newReservation uid: ${newReservation.userID} , `, `u/${newReservation.userID}/st/${showtime.id}/s/${seat.id}`);
        client.publish("reservation", JSON.stringify(newReservation));

    }
    console.log(`reservation uid: ${reservation.userID} ,`,`u/${reservation.userID}/st/${showtime.id}/s/${seat.id}`);
    client.publish("reservation", JSON.stringify(reservation));

    client.subscribe(`u/${reservation.userID}/st/${showtime.id}/s/${seat.id}`, () => {
        
    });
    client.on("message", (topic, message) => {
        if(topic != `u/${reservation.userID}/st/${showtime.id}/s/${seat.id}`)
        {
            return;
        }
        console.log(`seat reserved topic: ${topic} message: ${message.toString()}`);
        console.log(reservation);
        client.unsubscribe(`u/${reservation.userID}/st/${showtime.id}/s/${seat.id}`);
    })
}


function getMovie(movieList: IMoive[]) : IMoive
{
    return  movieList[Math.floor(Math.random() * movieList.length)];
}

function getShowtime(movie: IMoive) : IShowTime
{
    return movie.showtimes[Math.floor(Math.random() * movie.showtimes.length)];
}

function getSeat(showtime: IShowTime) : ISeat
{
    return showtime.seats[Math.floor(Math.random() * showtime.seats.length)];
}

function newReservation(movie: IMoive, showtime: IShowTime, seat: ISeat) : IReservation
{
    return {
        movieID: movie.id,
        showTimeID: showtime.id,
        seat: seat,
        cinemaID: movie.cinemaID,
        userID: random.int(0, 100).toString(),
        id: v6()
    };
}

