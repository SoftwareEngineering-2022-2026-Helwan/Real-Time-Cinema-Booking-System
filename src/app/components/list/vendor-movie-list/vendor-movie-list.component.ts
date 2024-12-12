import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-movie-list',
  templateUrl: './vendor-movie-list.component.html',
  styleUrls: ['./vendor-movie-list.component.css']
})
export class VendorMovieListComponent implements OnInit {

  constructor() { }
  List =[
    {title:"movie1",category:"Action",duration:"2h"},
    {title:"movie2",category:"Drama",duration:"3h 30 minutes"},
    {title:"movie3",category:"Comedy",duration:"2h "},
    {title:"movie4",category:"Thriller",duration:"1h 30 minutes"},


  ]
  showList =[
    {id:"movie1", showtime:"10:00am",hall:"A1"},
    {id:"movie2", showtime:"12:00pm",hall:"A2"},
    {id:"movie3", showtime:"4:00pm" ,hall:"A3"},
    {id:"movie4", showtime:"7:00pm",hall:"A4"},
    {id:"movie5", showtime:"6:00pm",hall:"A5"},
    {id:"movie6", showtime:"8:00pm",hall:"A6"},
    {id:"movie7", showtime:"9:00pm",hall:"A1"},
    {id:"movie8", showtime:"11:00pm",hall:"A2"},
    {id:"movie9", showtime:"1:00am",hall:"A4"},
    {id:"movie10", showtime:"3:00am",hall:"A5"},
  ]

  ngOnInit() {
  }

}
