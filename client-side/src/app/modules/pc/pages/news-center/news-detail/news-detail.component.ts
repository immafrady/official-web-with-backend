import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NewsCenterService} from "../news-center/news-center.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IArticleListOptions} from "../../../../../../../../libs/request/article";
import {ArticlePick} from "../../../../../../../../libs/entity/article";

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
    private NewsCenterService: NewsCenterService
  ) { }

  getNewsDetail(id) {
    this.NewsCenterService.getNewsDetail({ id }).subscribe(({ data }) => {
      this.newsDetail = data.article;
      this.preRelated = data.related[0];
      this.nextRelated = data.related[1]
    })
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getNewsDetail(this.id)
  }

}
