
/*
url: /api/cinema/
body: { name: string }
*/
interface cinema_list_request {
    name: string;
}

interface cinema_list_response {
    cinemas: cinema[];
}

interface cinema {
    id: number;
    name: string;
    location: {
        city: string;
        lat: number;
        lng: number;
    };
    movies: movie[];
}

interface movie {
    id: number;
    img: string;
    title: string;
    category: string;
    duration: string;
}

/*
url: /api/cinema/:cinemaId
*/
interface cinema_request {
    id: number;
}

interface cinema_response {
    cinema: cinema;
}



