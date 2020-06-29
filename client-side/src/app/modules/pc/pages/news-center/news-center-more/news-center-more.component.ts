import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from '@/app/shared/base-page.component';
import {NewsCenterService} from "../news-center/news-center.service";
import {IArticleEntity} from '@libs/entity/article';

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
    private NewsCenterService: NewsCenterService
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  getNewsList(page): void {
    this.NewsCenterService.getNewsList({ page, size: 12 }, 'moreNewsList').subscribe(({ data }) => {
      this.moreNewsList = data.list;
      this.total = data.total
    })
  }

  getPageNewsList(page): void {
    this.NewsCenterService.getPageNewsList({ page, size: 12 }).subscribe(({ data }) => {
      this.moreNewsList = data.list;
      this.total = data.total
    })
  }

  ngOnInit(): void {
    this.getNewsList(1)
  }

}
