import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

    logout() {
        this.auth.logout();
        this.router.navigateByUrl('/');
    }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

}
