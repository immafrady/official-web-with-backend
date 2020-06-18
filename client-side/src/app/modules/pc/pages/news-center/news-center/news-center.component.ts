import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "../../../../../shared/base-page.component";
import {getImage} from "src/utils/getImage";

@Component({
  selector: 'pc-news-center',
  templateUrl: './news-center.component.html',
  styleUrls: ['./news-center.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsCenterComponent extends BasePageComponent implements OnInit {
  newsList: {title: string, date: number, thumbnail: string, routerLink: string}[] = [{
    title: '2019年度财税论坛圆满举行',
    date: 1231231231231,
    thumbnail: getImage('join-us-work-environment-1'),
    routerLink: '/admin'
  }, {
    title: '2019年度财税论坛圆满举行 财税风控及汇算清缴成会议重点',
    date: 1231231231231,
    thumbnail: getImage('join-us-work-environment-2'),
    routerLink: '/admin'
  }, {
    title: '2019年度财税论坛圆满举行 中国财经峰会冬季论坛在京投资..',
    date: 1231231231231,
    thumbnail: getImage('join-us-work-environment-3'),
    routerLink: '/admin'
  }]

  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  ngOnInit(): void {
  }

}
