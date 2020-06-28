import { Component, OnInit } from '@angular/core';
import {IArticleEntity} from "../../../../../../../../libs/entity/article";
import {IArticleDeleteOptions, IArticleSetStatusOption} from "../../../../../../../../libs/request/article";
import {ArticleStatus} from "../../../../../../../../libs/enums/article";
import { ArticleRequestService } from '../../../../../shared/api/article-request.service';

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
    private articleRequestService: ArticleRequestService
  ) {}

  getNewsList(): void {
    this.articleRequestService.getNewsListAdmin().subscribe(({ data }) => {
      this.articleList = data.list;
      this.total = data.total
    });
  }

  handlerArticle(id:IArticleSetStatusOption): void {
    this.articleRequestService.handlerArticle(id).subscribe(res => {
      this.getNewsList()
    })
  }

  deleteArticle(id: IArticleDeleteOptions): void {
    this.articleRequestService.deleteArticle(id).subscribe(() => {
      this.getNewsList()
    })
  }

  ngOnInit(): void {
    this.getNewsList()
  }
}
