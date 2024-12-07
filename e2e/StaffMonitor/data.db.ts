import { IMoive } from "./interfaces";

export const MOVIE_LIST: IMoive[] = [
    {
        id: 1,
        cinemaID: 1,
        showtimes: [{
            id: 1,
            time: "10:00",
            date: "2021-01-01",
            seats: Array.from({ length: 47 }, (_, index) => ({
                id: (index + 1).toString(),
                isFree: Math.random() < 0.5
            }))
        },
        {
            id: 2,
            time: "11:00",
            date: "2021-01-01",
            seats: Array.from({ length: 47 }, (_, index) => ({
                id: (index + 1).toString(),
                isFree: Math.random() < 0.5
            }))
        },
        {
            id: 3,
            time: "12:00",
            date: "2021-01-01",
            seats: Array.from({ length: 47 }, (_, index) => ({
                id: (index + 1).toString(),
                isFree: Math.random() < 0.5
            }))
        }],
        title: "The Matrix",
        staring: "Keanu Reeves"
    },
    {
        id: 2,
        cinemaID: 1,
        showtimes: [{
            id: 4,
            time: "10:00",
            date: "2021-01-01",
            seats: Array.from({ length: 47 }, (_, index) => ({
                id: (index + 1).toString(),
                isFree: Math.random() < 0.5
            }))
        }],
        title: "The Matrix Reloaded",
        staring: "Keanu Reeves"
    },
    {
        id: 3,
        cinemaID: 1,
        showtimes: [{
            id: 5,
            time: "13:00",
            date: "2021-01-01",
            seats: Array.from({ length: 47 }, (_, index) => ({
                id: (index + 1).toString(),
                isFree: Math.random() < 0.5
            }))
        }],
        title: "The Matrix Revolutions",
        staring: "Keanu Reeves"
    },
    {
        id: 4,
        cinemaID: 2,
        showtimes: [{
            id: 6,
            time: "10:00",
            date: "2021-01-01",
            seats: Array.from({ length: 47 }, (_, index) => ({
                id: (index + 1).toString(),
                isFree: Math.random() < 0.5
            }))
        }],
        title: "The Lord of the Rings",
        staring: "Elijah Wood"
    },
    {
        id: 5,
        cinemaID: 2,
        showtimes: [{
            id: 7,
            time: "11:00",
            date: "2021-01-01",
            seats: Array.from({ length: 47 }, (_, index) => ({
                id: (index + 1).toString(),
                isFree: Math.random() < 0.5
            }))
        }],
        title: "The Lord of the Rings: The Two Towers",
        staring: "Elijah Wood"
    }
];

