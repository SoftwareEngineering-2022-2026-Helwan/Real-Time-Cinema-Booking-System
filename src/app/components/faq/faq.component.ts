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
        {question: "After clicking on seat, how long do reservation stay?", answer: "Seat is reserved for 15 mins after seat is clicked."},
        {question: "How can I add a new cinema?", answer: "You can add a new cinema from the admin dashboard under the 'Cinemas' section."},
        {question: "How do I update movie information?", answer: "Movie information can be updated by navigating to the 'Movies' section in the admin dashboard and selecting the movie you wish to edit."},
        {question: "What happens if I cancel a reservation?", answer: "If you cancel a reservation, the seat becomes available for others to book immediately."},
        {question: "How do I view current reservations?", answer: "Current reservations can be viewed under the 'Reservations' tab in your account section."},
        {question: "Can I book multiple seats at once?", answer: "Yes, you can select multiple seats and book them simultaneously in a single transaction."}
  ];

  ngOnInit() {
  }

}
