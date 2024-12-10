/*
url: /api/login
body: { email: string, password: string }
*/

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
}