import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";


const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule) },
  { path: 'news-list', loadChildren: () => import('./pages/news-list/news-list.module').then(mod => mod.NewsListModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
