import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentListComponent} from "@admin/pages/department-manager/department-list/department-list.component";
import {IRouterData} from "@/config/router-info";
import {EditDepartmentComponent} from "@admin/pages/department-manager/edit-department/edit-department.component";


const routes: Routes = [
  { path: '', component: DepartmentListComponent, data: <IRouterData> { title: '部门列表' }},
  { path: 'edit-department', component: EditDepartmentComponent, data: <IRouterData> { title: '编辑/上传部门' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentManagerRoutingModule { }
