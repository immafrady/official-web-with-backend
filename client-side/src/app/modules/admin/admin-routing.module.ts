import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import { WrapperComponent } from "./layout/wrapper/wrapper.component";
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule) },
      { path: '', component: WrapperComponent, canActivateChild: [AuthGuard], children: [
        // todo 加载具体页面
          { path: 'news-list', loadChildren: () => import('./pages/news-list/news-list.module').then(mod => mod.NewsListModule) },
          { path: 'picture-manager', loadChildren: () => import('./pages/picture-manager/picture-manager.module').then(mod => mod.PictureManagerModule) },
          { path: 'recruitment-manager', loadChildren: () => import('./pages/recruitment-manager/recruitment-manager.module').then(mod => mod.RecruitmentManagerModule) },
          { path: 'department-manager', loadChildren: () => import('./pages/department-manager/department-manager.module').then(mod => mod.DepartmentManagerModule) },
          { path: 'incident-manager', loadChildren: () => import('./pages/incident-manager/incident-manager.module').then(mod => mod.IncidentManagerModule) },
          { path: '**', redirectTo: 'news-list' }
        ] },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
