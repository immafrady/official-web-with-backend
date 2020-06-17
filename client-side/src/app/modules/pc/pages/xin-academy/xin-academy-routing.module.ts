import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {getWebRouterInfo, IRouterData, WebRouterName} from "../../../../../config/router-info";
import {XinAcademyComponent} from "./xin-academy.component";


const routes: Routes = [
  { path: '', component: XinAcademyComponent, data: <IRouterData>{ title: getWebRouterInfo(WebRouterName.XinAcademy).title }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XinAcademyRoutingModule { }
