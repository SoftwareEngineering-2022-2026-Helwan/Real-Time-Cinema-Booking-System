import {jwtDecode} from 'jwt-decode';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


setToken(token: string){
  localStorage.setItem('token', token);
}

decodeToken(): any{
  return jwtDecode(localStorage.getItem('token')??"");
}

constructor() { }

}
