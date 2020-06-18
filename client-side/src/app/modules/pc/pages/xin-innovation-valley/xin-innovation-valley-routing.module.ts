import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {getWebRouterInfo, IRouterData, WebRouterName} from "../../../../../config/router-info";
import {XinInnovationValleyComponent} from "./xin-innovation-valley.component";


const routes: Routes = [
  { path: '', component: XinInnovationValleyComponent, data: <IRouterData>{ title: getWebRouterInfo(WebRouterName.XinInnovationValley).title }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XinInnovationValleyRoutingModule { }
