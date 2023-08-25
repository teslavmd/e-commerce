import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/banner-1.png',
    };
    this.slides[1] = {
      src: './assets/img/banner-2.png',
    }
    this.slides[2] = {
      src: './assets/img/banner-3.png',
    }
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

}
