export interface IMoive
{
    id: number;
    title: string;
    cinemaID: number;
    staring: string;
    showtimes: IShowTime[];
}

export interface IShowTime
{
    id: number;
    time: string;
    date: string;
    seats: ISeat[];
}

export interface ISeat
{
    id: string;
    isFree: boolean;
}

export interface IReservation
{
    id: string;
    seat: ISeat;
    showTimeID: number;
    movieID: number;
    cinemaID: number;
    userID: string;
}