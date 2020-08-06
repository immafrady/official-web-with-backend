import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {getWebRouterInfo, IRouterData, WebRouterName} from '@/config/router-info';
import {JoinUsComponent} from "./join-us/join-us.component";
import {EnterpriseCultureMoreComponent} from "@pc/pages/join-us/enterprise-culture-more/enterprise-culture-more.component";


const routes: Routes = [
  { path: '' , component: JoinUsComponent, data: <IRouterData>{ title: getWebRouterInfo(WebRouterName.JoinUs).title } },
  { path: 'enterprise-culture-more', component: EnterpriseCultureMoreComponent, data: <IRouterData> { title: '更多' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinUsRoutingModule { }
