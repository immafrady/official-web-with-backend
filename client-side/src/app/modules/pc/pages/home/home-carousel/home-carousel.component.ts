import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import { BASE_64_IMG } from "src/config/images";
import { getImage } from 'src/utils/getImage';

@Component({
  selector: 'pc-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeCarouselComponent implements OnInit, AfterViewInit {

  getImage = getImage;
  carouselPlay = true;
  base64Pics = BASE_64_IMG;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  mouseEnter() {
    this.carouselPlay = false
  }
  mouseLeave() {
    this.carouselPlay = true
  }

}
