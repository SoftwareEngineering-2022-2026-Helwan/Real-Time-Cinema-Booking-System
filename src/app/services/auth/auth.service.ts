import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

isLogged() : boolean{
  return false;
}
isAdmin() : boolean{
  return false;
}
isVendor() : boolean{
  return false;
}
isCustomer() : boolean{
  return false;
}

}
