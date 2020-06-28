import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ArticleRequestService} from "../../../../../shared/api/article-request.service";
import {ActivatedRoute} from "@angular/router";
import {IArticleListOptions} from "../../../../../../../../libs/request/article";
import {ArticlePick} from "../../../../../../../../libs/entity/article";
import { Title } from '@angular/platform-browser';
import { APPLICATION_NAME } from '../../../../../../config/resources';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NewsDetailComponent implements OnInit {
  id: number;
  newsDetail:IArticleListOptions;
  preRelated: ArticlePick;
  nextRelated: ArticlePick;
  constructor(
    private route: ActivatedRoute,
    private articleRequestService: ArticleRequestService,
    private titleService: Title
  ) { }

  getNewsDetail(id) {
    this.articleRequestService.getNewsDetail({ id }).subscribe(({ data }) => {
      this.newsDetail = data.article;
      this.preRelated = data.related[0];
      this.nextRelated = data.related[1]
      this.titleService.setTitle(`${APPLICATION_NAME}${this.newsDetail.title ? ' - 新闻 - ' + this.newsDetail.title : ''}`)
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.getNewsDetail(data.id)
    });
  }

}
