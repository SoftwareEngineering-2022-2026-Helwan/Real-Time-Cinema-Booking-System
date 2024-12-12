import {jwtDecode} from 'jwt-decode';
import { Injectable } from '@angular/core';

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

constructor() { }

}
