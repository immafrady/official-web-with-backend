import { Component, OnInit, ViewEncapsulation, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "../../../../shared/base-page.component";
import {getImage} from "../../../../../utils/getImage";
import Swiper from "swiper";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'pc-xin-town',
  templateUrl: './xin-town.component.html',
  styleUrls: ['./xin-town.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class XinTownComponent extends BasePageComponent implements OnInit, AfterViewInit {
  getImage = getImage;
  xinTownSwiper: Swiper;
  sliderName: string = 'prev';
  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router,
    @Inject(PLATFORM_ID)
    private platformId: any
  ) {
    super(metaService, titleService, activatedRoute, router)
  }
  swipePrev(name) {
    this.xinTownSwiper.swipePrev();
    this.sliderName = name
  }
  swipeNext(name) {
    this.xinTownSwiper.swipeNext();
    this.sliderName = name
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.xinTownSwiper = new Swiper('#gallery', {
        spaceBetween: 10,
        calculateHeight: true,
        thumbs: {
          swiper: {
            el: '#thumbs',
            slidesPerView: 2,
            watchSlidesVisibility: true
          },
          thumbsContainerClass: 'swiper-container-thumbs'
        }
      });
    }
  }

  ngOnInit(): void {}

}
