import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentManagerRoutingModule } from './incident-manager-routing.module';
import { AdminSharedModule } from "@admin/shared/admin-shared.module";
import { DetailListComponent } from './detail-list/detail-list.component';
import { YearListComponent } from './year-list/year-list.component';
import {
  NzButtonModule,
  NzFormModule,
  NzInputModule, NzInputNumberModule,
  NzModalModule,
  NzSelectModule,
  NzTableModule
} from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [DetailListComponent, YearListComponent],
  imports: [
    CommonModule,
    AdminSharedModule,
    IncidentManagerRoutingModule,
    NzButtonModule,
    NzTableModule,
    NzInputModule,
    FormsModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzInputNumberModule
  ]
})
export class IncidentManagerModule { }
