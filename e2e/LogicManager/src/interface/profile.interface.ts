
/*
url: /api/profile/:userid
*/
interface profile_request {
    id: number
}

interface profile_response {
    fname: string;
    lname: string;
    phone: string;
    email: string;
    password: string;
    token: string;
}


