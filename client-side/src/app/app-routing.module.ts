import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AppComponent} from "./app.component";
import {ErrorComponent} from "./error/error.component";


const routes: Routes = [
  { path: '', component: AppComponent, data: { title: '外面' }, children: [
      { path: '', loadChildren: () => import('./modules/pc/pc.module').then(mod => mod.PcModule), data: { title: '里面' } },
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
