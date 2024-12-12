import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  movies = [
    {image: 'https://via.placeholder.com/800x400?text=New+Image+2'},
    {image: 'https://via.placeholder.com/800x400?text=New+Image+1'},
    {image: 'https://via.placeholder.com/800x400?text=New+Image+3'},
    {image: 'https://via.placeholder.com/800x400?text=New+Image+4'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
