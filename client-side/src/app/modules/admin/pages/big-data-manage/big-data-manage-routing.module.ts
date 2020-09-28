import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BigDataManageComponent} from "@admin/pages/big-data-manage/big-data-manage.component";


const routes: Routes = [
  {path: '', component: BigDataManageComponent, data: { title: '大数据管理' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigDataManageRoutingModule { }
