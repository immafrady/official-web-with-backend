import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {getWebRouterInfo, IRouterData, WebRouterName} from '@/config/router-info';
import {XinTownComponent} from "./xin-town.component";


const routes: Routes = [
  { path: '', component: XinTownComponent, data: <IRouterData>{ title: getWebRouterInfo(WebRouterName.XinTown).title }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XinTownRoutingModule { }
