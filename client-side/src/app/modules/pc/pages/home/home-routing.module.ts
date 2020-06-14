import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {getWebRouterInfo, IRouterData, WebRouterName} from "../../../../../config/router-info";


const routes: Routes = [
  { path: getWebRouterInfo(WebRouterName.Home).name , component: HomeComponent, data: <IRouterData>{ title: getWebRouterInfo(WebRouterName.Home).title } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
