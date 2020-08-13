import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecruitmentManagerComponent} from "@admin/pages/recruitment-manager/recruitment-manager/recruitment-manager.component";
import {IRouterData} from "@/config/router-info";
import {EditRecruitInfoComponent} from "@admin/pages/recruitment-manager/edit-recruit-info/edit-recruit-info.component";


const routes: Routes = [
  { path: '', component: RecruitmentManagerComponent, data: <IRouterData> { title: '招聘管理'}},
  { path: 'edit-recruit-info', component: EditRecruitInfoComponent, data: <IRouterData> { title: '发布/编辑招聘信息'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentManagerRoutingModule { }
