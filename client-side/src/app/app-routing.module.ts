import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ErrorComponent} from "./error/error.component";


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/pc/pc.module').then(mod => mod.PcModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule) },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
