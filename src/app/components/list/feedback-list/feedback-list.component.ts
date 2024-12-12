import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  constructor() { }
  feedbackList = [
    {
      email: 'user1@mail.com',
      feedback: 'I have a problem on the login page. Every time I press login, the login loader does not remove after entering the home page.',
    },
    {
      email: 'user2@mail.com',
      feedback: 'the home page renders slowly.',
    },]

  ngOnInit() {
  }

}
