import { Component, OnInit , inject} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  authService = inject(AuthService);

  faqs: any[] = [
    {question : "After clicking on seat, how long do reservation stay?", answer : "Seat is reserved for 15 mins after seat is clicked."},
    {question : "After clicking on seat, how long do reservation stay?", answer : "Seat is reserved for 15 mins after seat is clicked."},
    {question : "After clicking on seat, how long do reservation stay?", answer : "Seat is reserved for 15 mins after seat is clicked."},
    {question : "After clicking on seat, how long do reservation stay?", answer : "Seat is reserved for 15 mins after seat is clicked."},
    {question : "After clicking on seat, how long do reservation stay?", answer : "Seat is reserved for 15 mins after seat is clicked."},
    {question : "After clicking on seat, how long do reservation stay?", answer : "Seat is reserved for 15 mins after seat is clicked."}
  ]

  ngOnInit() {
  }

}
