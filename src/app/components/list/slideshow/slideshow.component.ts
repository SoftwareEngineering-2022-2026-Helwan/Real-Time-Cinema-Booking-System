import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  movies = [
    {image: '../../../../assets/imgs/postersH/1.jpg'},
    {image: '../../../../assets/imgs/postersH/2.jpg'},
    {image: '../../../../assets/imgs/postersH/3.jpg'},
    {image: '../../../../assets/imgs/postersH/4.jpg'},
    {image: '../../../../assets/imgs/postersH/5.jpg'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
