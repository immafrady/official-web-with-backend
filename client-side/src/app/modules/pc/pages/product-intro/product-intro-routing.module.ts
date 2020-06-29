import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {getWebRouterInfo, IRouterData, WebRouterName} from '@/config/router-info';
import {ProductIntroComponent} from "./product-intro.component";


const routes: Routes = [
  { path: '' , component: ProductIntroComponent, data: <IRouterData>{ title: getWebRouterInfo(WebRouterName.ProductIntro).title } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductIntroRoutingModule { }
