/*
url: /api/checkout/:userid
*/

interface checkout_request {
    id: number;
}

interface checkout_response {
    reservationtId: number;
    total: number;
    showtime: 
    {
        id: number;
        movie: 
        {
            id: number;
            title: string;
        };
        cinemaId: number;
        hallNumber: number;
        showtime: string;
        seats: string[];
    };
}

