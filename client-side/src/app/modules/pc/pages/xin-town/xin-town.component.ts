import {Component, OnInit, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "../../../../shared/base-page.component";
import {getImage} from "../../../../../utils/getImage";
import Swiper from "swiper";

@Component({
  selector: 'pc-xin-town',
  templateUrl: './xin-town.component.html',
  styleUrls: ['./xin-town.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class XinTownComponent extends BasePageComponent implements OnInit, AfterViewInit {
  getImage = getImage;
  xinTownwiper: Swiper;
  slides = [
    getImage('xin-town-big-bg-1'),
    getImage('xin-town-small-bg-2'),
  ];
  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    super(metaService, titleService, activatedRoute, router)
  }
  ngAfterViewInit() {
    this.xinTownwiper = new Swiper('#gallery', {
      spaceBetween: 10,
      thumbs: {
        swiper: {
          // @ts-ignore
          el: '#thumbs',
          slidesPerView: 2,
          watchSlidesVisibility: true
        },
        thumbsContainerClass: 'swiper-container-thumbs'
      }
    });
  }

  ngOnInit(): void {
  }

}
