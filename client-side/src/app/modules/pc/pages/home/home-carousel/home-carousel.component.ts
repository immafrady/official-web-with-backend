import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BASE_64_IMG, PATH_IMG} from "src/config/images";

@Component({
  selector: 'pc-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeCarouselComponent implements OnInit, AfterViewInit {

  base64Pics = BASE_64_IMG;
  images = PATH_IMG;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }


}
