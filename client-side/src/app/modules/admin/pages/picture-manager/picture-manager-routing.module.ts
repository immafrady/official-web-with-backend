import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditPictureComponent} from "@admin/pages/picture-manager/edit-picture/edit-picture.component";
import {PictureManagerComponent} from "@admin/pages/picture-manager/picture-manager/picture-manager.component";


const routes: Routes = [
  {path: '', component: PictureManagerComponent, data: { title: '图片管理' }},
  {path: 'edit-picture', component: EditPictureComponent, data: { title: '上传/修改图片' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PictureManagerRoutingModule { }
