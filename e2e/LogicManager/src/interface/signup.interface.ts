/*
url: /api/signup
body: { fName: string, lName: string, email: string, password: string, phone: string }
*/
interface signupRequest {
    fName: string;
    lName: string;
    email: string;
    password: string;
    phone: string;
}

interface signupResponse {
    token: string;
}
