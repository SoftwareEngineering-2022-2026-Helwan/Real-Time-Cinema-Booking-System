import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-vendor-header',
  templateUrl: './vendor-header.component.html',
  styleUrls: ['./vendor-header.component.css']
})
export class VendorHeaderComponent implements OnInit {

    logout() {
        this.auth.logout();
        this.router.navigateByUrl('/');
    }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

}
