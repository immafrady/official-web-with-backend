import { Component, OnInit } from '@angular/core';
import {NewsLIstService} from "../news-list.service";
import {IArticleDeleteOptions, IArticleSetStatusOption} from '@libs/request/article';
import {ArticleStatus} from '@libs/enums/article';
import {IJobDepartmentEditOptions} from "@libs/request/job";

@Component({
  selector: 'admin-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: IJobDepartmentEditOptions } } = {};
  articleList = [];
  ArticleStatus = ArticleStatus;
  total: number;
  constructor(
    private newsLIstService: NewsLIstService
  ) {}

  saveEditSort(id): void {
    this.newsLIstService.updateArticleSort(id, { sort: this.editCache[id].data.sort}).subscribe(() => {
      const index = this.articleList.findIndex(item => item.id === id);
      Object.assign(this.articleList[index], this.editCache[id].data);
      this.editSort(id, false)
    })
  }

  editSort(id: string, judge: boolean): void {
    this.editCache[id].edit = judge;
  }

  getNewsList(): void {
    this.newsLIstService.getNewsList().subscribe(({ data }) => {
      this.articleList = data.list;
      this.total = data.total;
      this.articleList.forEach(item => {
        this.editCache[item.id] = {
          edit: false,
          data: { ...item }
        };
      });
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
