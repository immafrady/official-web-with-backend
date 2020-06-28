import { Component, OnInit } from '@angular/core';
import {Meta, Title, TransferState} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "src/app/shared/mixins/base-page.component";
import { getImage } from "src/utils/getImage";
import {ArticleRequestService} from "../../../../shared/api/article-request.service";
import {IArticleEntity} from "../../../../../../../libs/entity/article";
import {ArticleType} from "../../../../../../../libs/enums/article";

@Component({
  selector: 'pc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  NewsList:IArticleEntity[];
  getImage = getImage;

  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router,
    private NewsCenterService: ArticleRequestService
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  getNewsList(): void {
    this.NewsCenterService.getNewsList({ page: 1, size: 4, type: ArticleType.New }, 'NewsList').subscribe(res => {
      this.NewsList = res.data.list;
    })
  }

  ngOnInit(): void {
    this.getNewsList()
  }

}
