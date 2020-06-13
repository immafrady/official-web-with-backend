import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PcComponent} from "./pc.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path: '', component: PcComponent, children: [
      { path: '', component: HomeComponent }
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
