import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "src/app/shared/base-page.component";
import { getImage } from "src/utils/getImage";
import {NewsCenterService} from "../news-center/news-center/news-center.service";
import {IArticleEntity} from "../../../../../../../libs/entity/article";

@Component({
  selector: 'pc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  newsList:IArticleEntity[];
  getImage = getImage;

  firstList: string[] = [
    getImage('logo-tencent'),
    getImage('logo-tictok'),
    getImage('logo-yy'),
    getImage('logo-xigua'),
    getImage('logo-huya'),
    getImage('logo-zhaoshang'),
    getImage('logo-mybank'),
    getImage('logo-pingan'),
    getImage('logo-fortex'),
    getImage('logo-bge'),
    getImage('logo-wanlian'),
    getImage('logo-netease'),
    getImage('logo-qq-music'),
    getImage('logo-zhongyou'),
    getImage('logo-thunder')
  ];
  secondList: string[] = [
    getImage('logo-lingji'),
    getImage('logo-xiaopeng'),
    getImage('logo-plateno'),
    getImage('logo-huoshan'),
    getImage('logo-poly'),
    getImage('logo-art'),
    getImage('logo-yujia'),
    getImage('logo-7-days-im'),
    getImage('logo-k'),
    getImage('logo-shunfeng'),
    getImage('logo-gst'),
    getImage('logo-huize'),
    getImage('logo-boqii'),
    getImage('logo-baluru'),
    getImage('logo-bgy')
  ];

  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router,
    private NewsCenterService: NewsCenterService
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  getNewsList(): void {
    this.NewsCenterService.getNewsList({ page: 1, size: 4 }).subscribe(res => {
      this.newsList = res.data.list;
    })
  }

  ngOnInit(): void {
    this.getNewsList()
  }

}
