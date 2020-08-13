import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentManagerRoutingModule } from './department-manager-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import {
  NzButtonModule,
  NzFormModule,
  NzGridModule,
  NzInputModule,
  NzTableModule,
  NzToolTipModule,
  NzWaveModule
} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [DepartmentListComponent, EditDepartmentComponent],
  imports: [
    CommonModule,
    DepartmentManagerRoutingModule,
    NzTableModule,
    NzToolTipModule,
    NzWaveModule,
    NzButtonModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DepartmentManagerModule { }
