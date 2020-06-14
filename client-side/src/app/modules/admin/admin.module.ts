import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {AdminSharedModule} from "./shared/admin-shared.module";


@NgModule({
  declarations: [AdminComponent],
  imports: [
    AdminSharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
