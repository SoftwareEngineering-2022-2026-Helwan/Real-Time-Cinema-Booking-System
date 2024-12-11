import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  movies = [
    {image: '../../assets/imgs/images (1).jpg'},
    {image: '../../assets/imgs/images (2).jpg'},
    {image: '../../assets/imgs/images (3).jpg'},
    {image: '../../assets/imgs/images.jpg'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
