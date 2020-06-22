import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "../../../../../shared/base-page.component";
import {getImage} from "../../../../../../utils/getImage";
import {NewsCenterService} from "../news-center/news-center.service";
import {IArticleEntity} from "../../../../../../../../libs/entity/article";

@Component({
  selector: 'pc-news-center-more',
  templateUrl: './news-center-more.component.html',
  styleUrls: ['./news-center-more.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsCenterMoreComponent extends BasePageComponent implements OnInit {
  newsList: IArticleEntity[];
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
    this.NewsCenterService.getNewsList({ page: 1, size: 12 }).subscribe(({ data }) => {
      this.newsList = data.list
    })
  }

  ngOnInit(): void {
    this.getNewsList()
  }

}
