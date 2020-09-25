import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IRouterData } from "@/config/router-info";
import { BigDataBoardComponent } from "@pc/pages/big-data-board/big-data-board.component";


const routes: Routes = [
  { path: '' , component: BigDataBoardComponent, data: <IRouterData>{ title: '大数据看板' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigDataBoardRoutingModule { }
