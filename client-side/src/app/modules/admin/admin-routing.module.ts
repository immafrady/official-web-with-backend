import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import { WrapperComponent } from "./layout/wrapper/wrapper.component";
import { LoginComponent } from "./pages/login/login.component";


const routes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: '', component: WrapperComponent, children: [
        // todo 加载具体页面
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
