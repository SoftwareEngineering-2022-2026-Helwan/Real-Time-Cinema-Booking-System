import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-feedback-list-item',
  templateUrl: './feedback-list-item.component.html',
  styleUrls: ['./feedback-list-item.component.css']
})
export class FeedbackListItemComponent implements OnInit {

  constructor() { }
  @Input() feedbackList: any[] = [];

  ngOnInit() {
  }

}
