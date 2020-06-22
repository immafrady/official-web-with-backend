import { Component, OnInit } from '@angular/core';
import {NewsLIstService} from "../news-list.service";
import {IArticleEntity} from "../../../../../../../../libs/entity/article";
import {IArticleSetStatusOption} from "../../../../../../../../libs/request/article";

@Component({
  selector: 'admin-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  articleList:IArticleEntity[];
  total: number;
  constructor(
    private NewsLIstService: NewsLIstService
  ) {}

  handlerArticle(id:IArticleSetStatusOption) {

  }

  ngOnInit(): void {
    this.NewsLIstService.getNewsList().subscribe(({ data }) => {
      this.articleList = data.list;
      this.total = data.total
    });
  }
}
