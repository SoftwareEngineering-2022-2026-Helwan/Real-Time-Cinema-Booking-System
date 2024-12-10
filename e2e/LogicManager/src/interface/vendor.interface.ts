

/*
url: /api/vendor/:vendorId
method: GET
*/

interface vendor_request {
    id: number
}

interface vendor_response {
    id: number;
    name: string;
    phone: string;
    no_of_cinemas: number;
}

/*
url: /api/vendor/
method: GET
*/
interface vendor_request {
    
}

interface vendor_response {
    vendors: vendor[];
}

interface vendor {
    id: number;
    name: string;
    phone: string;
    no_of_cinemas: number;
}

/*
url: /api/vendor/
method: POST
body: { fname: string, lname: string, phone: string, email: string, password: string }
*/
interface vendor_request {
    fname: string;
    lname: string;
    phone: string;
    email: string;
    password: string;
}

interface vendor_response {
    message: string;
}


/*
url: /api/vendor/:vendorId
method: DELETE
*/

interface vendor_request {
    id: number;
}

interface vendor_response {
    message: string;
}

/*
url: /api/vendor/:vendorId
method: PUT
body: { fname: string, lname: string, phone: string, email: string, password: string }
*/

interface vendor_request {
    id: number;
    fname: string;
    lname: string;
    phone: string;
    email: string;
    password: string;
}

interface vendor_response {
    message: string;
}


/*
url: /api/vendor/:vendorId/cinemas/
method: GET
*/

interface vendor_request {
    id: number; 
}

interface vendor_response {
    cinemas: cinema[];
}

interface cinema {
    id: number;
    name: string;
    location: {
        city: string;
        lat: number;
        lng: number;
    }
}

