import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {getWebRouterInfo, IRouterData, WebRouterName} from '@/config/router-info';
import {ProductIntroComponent} from "./product-intro/product-intro.component";
import {ProductSmartStudioComponent} from "@pc/pages/product-intro/product-smart-studio/product-smart-studio.component";
import {ProductXinpayrollManagerComponent} from "@pc/pages/product-intro/product-xinpayroll-manager/product-xinpayroll-manager.component";


const routes: Routes = [
  { path: '' , component: ProductIntroComponent, data: <IRouterData>{ title: getWebRouterInfo(WebRouterName.ProductIntro).title } },
  { path: 'smart-studio', component: ProductSmartStudioComponent, data: <IRouterData>{ title: '口袋工作室' }},
  { path: 'xinpayroll-manager', component: ProductXinpayrollManagerComponent, data: <IRouterData>{ title: '薪税管家' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductIntroRoutingModule { }
