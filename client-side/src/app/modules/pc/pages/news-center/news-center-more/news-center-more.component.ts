import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "../../../../../shared/mixins/base-page.component";
import {getImage} from "../../../../../../utils/getImage";
import {ArticleRequestService} from "../../../../../shared/api/article-request.service";
import {IArticleEntity} from "../../../../../../../../libs/entity/article";

@Component({
  selector: 'pc-news-center-more',
  templateUrl: './news-center-more.component.html',
  styleUrls: ['./news-center-more.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsCenterMoreComponent extends BasePageComponent implements OnInit {
  moreNewsList: IArticleEntity[];
  total: number;
  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router,
    private articleRequestService: ArticleRequestService
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  getNewsList(page): void {
    this.articleRequestService.getNewsList({ page, size: 12 }, 'moreNewsList').subscribe(({ data }) => {
      this.moreNewsList = data.list;
      this.total = data.total
    })
  }

  ngOnInit(): void {
    this.getNewsList(1)
  }

}
