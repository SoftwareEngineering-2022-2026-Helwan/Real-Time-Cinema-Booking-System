/*
url: /api/movie/:movieId
*/
interface Movie_RequestInterface {
    id: number;
}

interface Movie_ResponseInterface {
    id: number;
    img: string;
    title: string;
    staring: string[];
    description: string;
    duration: string;
    cinema: cinema;
    showtimeIds: number[];
}

interface cinema 
{
    id: number;
    name: string;
    location: {
        city: string;
        lat: number;
        lng: number;
    }
}

/*
url: /api/movie/
body: { cinemaId: number }
*/
interface Movie_List_requestInterface {
    cinemaId?: number;
} 

interface Movie_List_responseInterface {
    movies: movie[];
}

interface movie 
{
    id: number;
    img: string;
    title: string;
    category: string;
    duration: string;
    cinema: string;
}