import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.css'],
})
export class SeatListComponent implements OnInit {
  // Example arrays
  option1Array: string[] = ['A2', 'D4', 'F3', 'C16'];
  option2Array: string[] = ['D2', 'H12', 'H13', 'H15'];
  option3Array: string[] = ['A14', 'B13', 'B15', 'B16'];


  selectedArray: string[] = [];

  onOptionChange(selectedOption: string): void {
    switch (selectedOption) {
      case 'option1':
        this.selectedArray = this.option1Array;
        break;
      case 'option2':
        this.selectedArray = this.option2Array;
        break;
      case 'option3':
        this.selectedArray = this.option3Array;
        break;
      default:
        this.selectedArray = [];
    }
  }


  constructor() {
  }

  ngOnInit() {
  }

}
