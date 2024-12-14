import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
api='http://localhost:8081/api'
constructor(private http:HttpClient) { }

/*
/reservation/dashBoard/vendor
*/
getDashboard(id:number)
{
    return this.http.get(`${this.api}/reservation/dashBoard/vendor/${id}`,{headers: {"Authorization": `Bearer ${sessionStorage.getItem('token')}` }});
}

}
