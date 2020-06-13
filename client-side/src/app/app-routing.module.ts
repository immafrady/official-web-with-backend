import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {ErrorComponent} from "./error/error.component";
import { PcComponent } from "./modules/pc/pc.component";


const routes: Routes = [
  { path: '', component: AppComponent, children: [
      { path: '', component: PcComponent },
      { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule) }
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
