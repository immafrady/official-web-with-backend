import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsListComponent} from "./news-list/news-list.component";
import {CreateArticleComponent} from "./create-article/create-article.component";
import { PreviewArticleComponent } from '@admin/pages/news-list/preview-article/preview-article.component';


const routes: Routes = [
  {path: '', component: NewsListComponent, data: { title: '新闻列表' }},
  {path: 'create-article/:id', component: CreateArticleComponent, data: { title: '新增/编辑文章' }},
  {path: 'preview-article/:id', component: PreviewArticleComponent, data: { title: '预览文章' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsListRoutingModule { }
