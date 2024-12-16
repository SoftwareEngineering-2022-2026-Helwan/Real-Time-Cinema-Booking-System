import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

    api='http://localhost:8081/api'
constructor(private http:HttpClient) { }

getCinemas()
{
    let token = sessionStorage.getItem('token');
    return this.http.get(`${this.api}/cinema/showAllCinema`, { headers: { Authorization: `Bearer ${token}` } });
}

getCinemasById(id:number)
{
    let token = sessionStorage.getItem('token');
    return this.http.get(`${this.api}/cinema/getCinemas/${id}`, { headers: { Authorization: `Bearer ${token}` } });
}

createCineam(data:any){
    let token = sessionStorage.getItem('token');
    return this.http.post(`${this.api}/cinema/createCinema/`, data, { headers: { Authorization: `Bearer ${token}` } });
}
}
