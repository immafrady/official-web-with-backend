import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {PcComponent} from "./pc.component";

const routes: Routes = [
  { path: '', component: PcComponent, children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule) , data: { title: '首页' } }
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
