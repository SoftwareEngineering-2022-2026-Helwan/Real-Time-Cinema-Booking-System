import {jwtDecode} from 'jwt-decode';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


setToken(token: string){
  sessionStorage.setItem('token', token);
}

decodeToken(): any{
  return jwtDecode(sessionStorage.getItem('token')??"");
}

constructor(private http: HttpClient) { }

api: string = "http://localhost:8081/api";

authState: Subject<boolean> = new Subject<boolean>();

logout(){
  sessionStorage.removeItem('token');
}
signup(fname: string, lname: string, email: string, password: string, phone: string){
    let data = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      phone: phone
    };
    console.log("data: ",data);
    this.http.post(`${this.api}/user/signup`, data).pipe(
        catchError(err => {
          if (err.status !== 200) {
              this.authState.next(false);
            return of({status: 'fail', message: 'Incorrect email or password'});
          }
          return throwError(err);
        })
      ).subscribe((response: any) => {
      if (response.status == 'success') {
        this.setToken(response.token);
        this.authState.next(true);
      }
    });
}
login(email: string, password: string)
{
    let data = {
      email: email,
      password: password
    }


    this.http.post<login_response>(`${this.api}/user/login`, data).pipe(
      catchError(err => {
        if (err.status === 401) {
            this.authState.next(false);
          return of({status: 'fail', message: 'Incorrect email or password'});
        }
        return throwError(err);
      })
    ).subscribe((response: any) => {

    //   console.log("response: ",response);

        if(response.status == 'success'){
          this.setToken(response.token);
          this.authState.next(true);
          return ;
        } 
    });

    this.authState.next(false);
}

// isLogged(): Promise<boolean> {
//     return new Promise((resolve) => {
//       const token = sessionStorage.getItem('token');
//         console.log(token);
//       if (!token) {
//         // Token is missing
//         console.warn('No token found in sessionStorage.');
//         resolve(false);
//         return;
//       }
  
//       // Validate the token with the backend
//       this.http.get(`${this.api}/verifyToken`, { 
//         headers: { Authorization: `Bearer ${token}` } 
//       }).pipe(
//         catchError((err) => {
//           if (err.status == 401) {
//             console.error('Token is invalid or expired.');
//             resolve(false);
//           }
//           return throwError(err);
//         })
//       ).subscribe(
//         (response: any) => {
//           if (response.status === 'success') {
//             console.log('Token is valid. User is authenticated.');
//             resolve(true);
//           } else {
//             resolve(false);
//           }
//         },
//         () => resolve(false) // Handle any other errors
//       );
//     });
//   }

  isLogged(): Observable<boolean> {
    const token = sessionStorage.getItem('token');
    // console.log(token);
    if (token === null) {
    //   console.error('Invalid or missing token');
      return of(false); // Immediately return false if token is invalid
    }
    console.log("how");
    // Verify the token via API and return the result as an Observable<boolean>
    return this.http
      .get(`${this.api}/verifyToken`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        map((response: any) => response.status === 'success'),
        catchError((err) => {
          console.error('Token verification failed:', err.message);
          return of(false); // Return false on error
        })
      );
  }

// isLogged(): boolean
// {
//     return sessionStorage.getItem('token')? true : false;
// }
    
isAdmin(): boolean {
    if(! sessionStorage.getItem('token'))
    {
        return false;
    }
    let token = this.decodeToken();
    if(token.role == 'admin') return true;
    return false;
}
isVendor() : boolean{
    if(! sessionStorage.getItem('token'))
    {
        return false;
    }
  let token = this.decodeToken();
  if(token.role == 'vendor') return true;
  return false;
}
isCustomer() : boolean{
    if(!sessionStorage.getItem('token'))
    {
        return false;
    }
  let token = this.decodeToken();
  if(token.role == 'customer') return true;
  return false;
}

}

interface login_response{   
        status: string,
        token: string,
}