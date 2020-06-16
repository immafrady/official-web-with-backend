import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {PcComponent} from "./pc.component";
import {getWebRouterInfo, WebRouterName} from "../../../config/router-info";

const routes: Routes = [
  { path: '', component: PcComponent, children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)},
      { path: getWebRouterInfo(WebRouterName.AboutUs).name, loadChildren: () => import('./pages/about-us/about-us.module').then(mod => mod.AboutUsModule) },
      { path: getWebRouterInfo(WebRouterName.NewsCenter).name, loadChildren: () => import('./pages/news-center/news-center.module').then(mod => mod.NewsCenterModule) }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PcRoutingModule { }
