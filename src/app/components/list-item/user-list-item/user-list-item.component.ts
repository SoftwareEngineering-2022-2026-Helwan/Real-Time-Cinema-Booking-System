import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UsersListItemComponent implements OnInit {

  constructor() { }
  @Input() VendorList: any[] = [];
  editVendor(vendorName: string){
    console.log("Edit ",vendorName);
  }


  ngOnInit() {
  }

}
