import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

    api='http://localhost:8081/api'
constructor(private http:HttpClient, private auth: AuthService) { }

getProfile()
{
    let token = sessionStorage.getItem('token');
    let id = this.auth.decodeToken().id;
    // console.log(id);
    return this.http.get(`${this.api}/user/profile/${id}`, { headers: { Authorization: `Bearer ${token}` } });
}
updateProfile(data:any)
{
    let token = sessionStorage.getItem('token');
    let id = this.auth.decodeToken().id;
    // console.log(id);
    // console.log(data);
    return this.http.put(`${this.api}/user/editUser/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
}
getFaq()
{
    return this.http.get(`${this.api}/faq/showFaq`);
}
}
