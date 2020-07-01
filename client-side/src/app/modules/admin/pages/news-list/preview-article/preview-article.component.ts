import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CreateArticleService } from '@admin/pages/news-list/create-article/create-article.service';
import { ActivatedRoute } from '@angular/router';
import { IArticleEntity } from '@libs/entity/article';

@Component({
  selector: 'app-preview-article',
  templateUrl: './preview-article.component.html',
  styleUrls: ['./preview-article.component.scss']
})
export class PreviewArticleComponent implements OnInit {

  newsDetail: IArticleEntity

  constructor(
    private route: ActivatedRoute,
    private createArticleService: CreateArticleService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.createArticleService.getArticleContent(data.id).subscribe(({ data }) => {
        this.newsDetail = data.article
      })
    })

  }

}
