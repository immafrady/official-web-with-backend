import { Component, OnInit } from '@angular/core';
import {NewsLIstService} from "../news-list.service";
import {IArticleEntity} from "../../../../../../../../libs/entity/article";
import {IArticleDeleteOptions, IArticleSetStatusOption} from "../../../../../../../../libs/request/article";
import {ArticleStatus} from "../../../../../../../../libs/enums/article";

@Component({
  selector: 'admin-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  articleList:IArticleEntity[];
  ArticleStatus = ArticleStatus;
  total: number;
  constructor(
    private newsLIstService: NewsLIstService
  ) {}

  getNewsList(): void {
    this.newsLIstService.getNewsList().subscribe(({ data }) => {
      this.articleList = data.list;
      this.total = data.total
    });
  }

  handlerArticle(id:IArticleSetStatusOption): void {
    this.newsLIstService.handlerArticle(id).subscribe(res => {
      this.getNewsList()
    })
  }

  deleteArticle(id: IArticleDeleteOptions): void {
    this.newsLIstService.deleteArticle(id).subscribe(() => {
      this.getNewsList()
    })
  }

  ngOnInit(): void {
    this.getNewsList()
  }
}
