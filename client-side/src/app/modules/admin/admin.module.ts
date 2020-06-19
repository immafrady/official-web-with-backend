import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {AdminSharedModule} from "./shared/admin-shared.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminSharedModule,
    AdminRoutingModule
  ],
  exports: [AdminComponent],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
