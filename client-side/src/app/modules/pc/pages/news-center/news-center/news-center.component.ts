import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "../../../../../shared/base-page.component";
import {HttpClient} from '@angular/common/http';
import {NewsCenterService} from "./news-center.service";
import {IArticleEntity} from "../../../../../../../../libs/entity/article";

@Component({
  selector: 'pc-news-center',
  templateUrl: './news-center.component.html',
  styleUrls: ['./news-center.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsCenterComponent extends BasePageComponent implements OnInit {
  newsList: IArticleEntity[];

  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router,
    private http:HttpClient,
    private NewsCenterService: NewsCenterService
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  ngOnInit(): void {
    this.NewsCenterService.getNewsList({ page: 1, size: 3 }).subscribe(res => {
      this.newsList = res.data.list
    })
  }

}
