import { Component, ElementRef, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { SignupComponent } from './components/signup/signup.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('openButton',{static: false}) openButton!: ElementRef;

//   ClickButton(){
//     this.openButton.nativeElement.click();
//   }



  authService = inject(AuthService);

  constructor(public dialog: MatDialog) {

    // this.authService.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
    // console.log(this.authService.decodeToken());
  }



//   openDialog(): void {
//     const dialogRef = this.dialog.open(SignupComponent);
//   }

  movies = [
    {
      h_src: '../assets/imgs/postersH/1.jpg',
      name: 'The Dark Knight',
      category: 'Action',
      duration: '2h 32m',
      cinema: 'Cinema 1'
    },
    {
      h_src: '../assets/imgs/postersH/10.jpg',
      name: 'The Lord of the Rings: The Return of the King',
      category: 'Adventure',
      duration: '3h 21m',
      cinema: 'Cinema 2'
    },
    {
      h_src: 'https://pbs.twimg.com/media/Ei9Oka8WAAQ7j4j?format=jpg&name=large',
      name: 'Pulp Fiction',
      category: 'Crime',
      duration: '2h 34m',
      cinema: 'Cinema 3'
    }
  ];

ngOnInit(): void {
//   setTimeout(() => {
//     this.ClickButton();
//   },2000);

}


}



