import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from '@/app/shared/base-page.component';
import {HttpClient} from '@angular/common/http';
import {NewsCenterService} from "./news-center.service";
import {IArticleEntity} from '@libs/entity/article';
import {ArticleType} from '@libs/enums/article';

@Component({
  selector: 'pc-news-center',
  templateUrl: './news-center.component.html',
  styleUrls: ['./news-center.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsCenterComponent extends BasePageComponent implements OnInit {
  hotsNewsList: IArticleEntity[];
  oldNewsList: IArticleEntity[];
  honerNewsList: IArticleEntity[] = [];
  showMoreHonerList:Boolean = false;

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

  getNewsList(size, type, list): void {
    this.NewsCenterService.getNewsList({ page: 1, size, type }, list).subscribe(res => {
      this[list] = res.data.list;
    })
  }

  ngOnInit(): void {
    this.getNewsList(4, ArticleType.Hot, 'hotsNewsList');
    this.getNewsList(4, ArticleType.Old, 'oldNewsList');
    this.getNewsList(0, ArticleType.Honor, 'honerNewsList')
  }

}
