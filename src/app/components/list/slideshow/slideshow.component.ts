import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  movies = [
    {image: '../../../../assets/imgs/maxresdefault.jpg'},
    {image: '../../../../assets/imgs/maxresdefault (1).jpg'},
    {image: '../../../../assets/imgs/BeautyAndTheBeast-LiveAction-HollywoodEnglishMoviePoster_23bd9882-b84d-4070-a69b-e72d8a87633e.jpg'},
    {image: '../../../../assets/imgs/x720.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
