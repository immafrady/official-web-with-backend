import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {getWebRouterInfo, WebRouterName} from '@/config/router-info';


const routes: Routes = [
  { path: getWebRouterInfo(WebRouterName.Home).name , component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
