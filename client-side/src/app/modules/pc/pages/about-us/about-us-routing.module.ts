import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {getWebRouterInfo, IRouterData, WebRouterName} from '@/config/router-info';
import {AboutUsComponent} from "./about-us.component";

const routes: Routes = [
  { path: '' , component: AboutUsComponent, data: <IRouterData>{ title: getWebRouterInfo(WebRouterName.AboutUs).title } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
