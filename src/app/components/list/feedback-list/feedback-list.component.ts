import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../services/feedback/feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) { }
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
    this.feedbackService.getReports().subscribe(
      (data:any )=> {
        // this.feedbackList = data;
        // console.log(data);
        this.feedbackList = data.map((item: any) => {
            let feedback = item.description.details;
            // console.log(item.description);
          return {
            email: item.email,
            feedback: feedback,
          };
        });
      }
    )
  }

}
