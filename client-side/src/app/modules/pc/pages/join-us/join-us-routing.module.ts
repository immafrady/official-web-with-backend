import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {getWebRouterInfo, IRouterData, WebRouterName} from '@/config/router-info';
import {JoinUsComponent} from "./join-us.component";


const routes: Routes = [
  { path: '' , component: JoinUsComponent, data: <IRouterData>{ title: getWebRouterInfo(WebRouterName.JoinUs).title } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinUsRoutingModule { }
