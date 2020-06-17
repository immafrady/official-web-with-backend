import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {getWebRouterInfo, IRouterData, WebRouterName} from "../../../../../config/router-info";
import {NewsCenterComponent} from "./news-center.component";


const routes: Routes = [
  { path: '' , component: NewsCenterComponent, data: <IRouterData>{ title: getWebRouterInfo(WebRouterName.NewsCenter).title } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsCenterRoutingModule { }
