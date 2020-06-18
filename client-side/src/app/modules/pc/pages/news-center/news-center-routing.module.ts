import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {getWebRouterInfo, IRouterData, WebRouterName} from "../../../../../config/router-info";
import {NewsCenterComponent} from "./news-center/news-center.component";
import {NewsCenterMoreComponent} from "./news-center-more/news-center-more.component";


const routes: Routes = [
  { path: '' , component: NewsCenterComponent, data: <IRouterData>{ title: getWebRouterInfo(WebRouterName.NewsCenter).title } },
  { path: 'more-news' , component: NewsCenterMoreComponent, data: <IRouterData>{ title: '更多新闻' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsCenterRoutingModule { }
