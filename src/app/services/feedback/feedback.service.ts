import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

api='http://localhost:8081/api'
constructor(private http:HttpClient) { }

getReports(){

    let token = sessionStorage.getItem('token');
    return this.http.get(`${this.api}/report/showReports`, { headers: { Authorization: `Bearer ${token}` } });
}

}
