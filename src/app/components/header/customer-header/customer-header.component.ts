import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {

    logout() {
        this.auth.logout();
        this.router.navigateByUrl('/');
    }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

}
