import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {AdminSharedModule} from "./shared/admin-shared.module";
import {CommonModule} from "@angular/common";
import {NzBreadCrumbModule, NzIconModule, NzLayoutModule, NzMenuModule, NzToolTipModule} from "ng-zorro-antd";
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [AdminComponent, WrapperComponent],
  imports: [
    CommonModule,
    AdminSharedModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzToolTipModule
  ],
  providers: [
    AuthGuard
  ],
  exports: [AdminComponent],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
