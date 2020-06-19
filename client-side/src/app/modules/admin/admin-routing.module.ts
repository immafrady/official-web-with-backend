import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import { WrapperComponent } from "./layout/wrapper/wrapper.component";


const routes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule) },
      { path: '', component: WrapperComponent, children: [
        // todo 加载具体页面
          { path: 'news-list', loadChildren: () => import('./pages/news-list/news-list.module').then(mod => mod.NewsListModule) },
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
