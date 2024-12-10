
/*
url: /api/showtime/:showtimeId
method: GET
*/

interface showtime_request {
    id: number
}

interface showtime_response {
    id: number
    showtime: string,
    movieid: number,
    cinemaid: number,
    seats: seat[];
}

interface seat
{
    id: string;
}


/*
url: /api/showtime/
method: GET
*/

interface showtime_list_request {
}

interface showtime_list_response {
    showtimes: showtime_response[];
}

/*
url: /api/showtime/
method: POST
body: { movieId: number, cinemaId: number, showtime: string, hallNo: string }
*/

interface showtime_request {
    movieId: number;
    cinemaId: number;
    showtime: string;
    hallNo: string;
}

interface showtime_response {
    message: string
}

/*
url: /api/showtime/:showtimeId
method: DELETE
*/
interface showtime_delete_request {
    id: number
}

interface showtime_delete_response {
    message: string
}


