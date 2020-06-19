import { Component, OnInit } from '@angular/core';
import {NewsLIstService} from "../news-list.service";
import {IArticleEntity} from "../../../../../../../../libs/entity/article";

@Component({
  selector: 'pc-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  articleList:IArticleEntity[];
  constructor(
    private NewsLIstService: NewsLIstService
  ) {}

  ngOnInit(): void {
    this.NewsLIstService.getNewsList().subscribe(({ data }) => {
      this.articleList = data.list
    });
  }
}
