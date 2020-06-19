import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {AdminSharedModule} from "./shared/admin-shared.module";
import {CommonModule} from "@angular/common";
import { NzBreadCrumbModule, NzIconModule, NzLayoutModule, NzMenuModule } from "ng-zorro-antd";
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [AdminComponent, WrapperComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminSharedModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzIconModule
  ]
})
export class AdminModule { }
