import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-gust-header',
  templateUrl: './gust-header.component.html',
  styleUrls: ['./gust-header.component.css']
})
export class GustHeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {

    this.authService.isLogged().subscribe((isAuthenticated) => { 

      this.isLogged = isAuthenticated;
      if(this.isLogged) 
      {
        this.isCustomer = this.authService.isCustomer();
      }
    });
   }

  ngOnInit() {
  }

  isLogged:boolean = false;
  isCustomer:boolean = false;
}
