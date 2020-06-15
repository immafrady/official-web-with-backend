import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "src/app/shared/base-page.component";
import {PATH_IMG} from "../../../../../config/images";

@Component({
  selector: 'pc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  newsList: any[] = [1,2,3]

  firstList: string[] = [
    PATH_IMG.LOGO_TENCENT,
    PATH_IMG.LOGO_TICTOK,
    PATH_IMG.LOGO_YY,
    PATH_IMG.LOGO_XIGUA,
    PATH_IMG.LOGO_HUYA,
    PATH_IMG.LOGO_ZHAOSHANG,
    PATH_IMG.LOGO_MYBANK,
    PATH_IMG.LOGO_PINGAN,
    PATH_IMG.LOGO_FORTEX,
    PATH_IMG.LOGO_BGE,
    PATH_IMG.LOGO_WANLIAN,
    PATH_IMG.LOGO_NETEASE,
    PATH_IMG.LOGO_QQ_MUSIC,
    PATH_IMG.LOGO_ZHONGYOU,
    PATH_IMG.LOGO_THUNDER,
  ]
  secondList: string[] = [
    PATH_IMG.LOGO_LINGJI,
    PATH_IMG.LOGO_XIAOPENG,
    PATH_IMG.LOGO_PLATENO,
    PATH_IMG.LOGO_HUOSHAN,
    PATH_IMG.LOGO_POLY,
    PATH_IMG.LOGO_ART,
    PATH_IMG.LOGO_YUJIA,
    PATH_IMG.LOGO_7_DAYS_IM,
    PATH_IMG.LOGO_K,
    PATH_IMG.LOGO_SHUNFENG,
    PATH_IMG.LOGO_GST,
    PATH_IMG.LOGO_HUIZE,
    PATH_IMG.LOGO_BOQII,
    PATH_IMG.LOGO_BALURU,
    PATH_IMG.LOGO_BGY
  ]

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
