import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }
  VendorList = [
    
    {name :"vendor 1" , phone : +201111111 , numberOfCinemas: 5},
    {name :"vendor 2" , phone : +202222222 , numberOfCinemas: 3},
    {name :"vendor 3" , phone : +203333333 , numberOfCinemas: 7},
    {
      name :"vendor 4" , phone : +204444444 , numberOfCinemas: 2
    },
    {
      name :"vendor 5" , phone : +205555555 , numberOfCinemas: 4
    },
    {
      name :"vendor 6" , phone : +206666666 , numberOfCinemas: 6
    },
  ]

  ngOnInit() {
  }

}
