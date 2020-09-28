import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigDataManageRoutingModule } from './big-data-manage-routing.module';
import {BigDataManageComponent} from "@admin/pages/big-data-manage/big-data-manage.component";
import {
  NzButtonModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule,
  NzTabsModule, NzUploadModule,
  NzWaveModule
} from "ng-zorro-antd";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [BigDataManageComponent],
  imports: [
    CommonModule,
    BigDataManageRoutingModule,
    NzGridModule,
    NzFormModule,
    ReactiveFormsModule,
    NzWaveModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzTabsModule,
    NzUploadModule
  ]
})
export class BigDataManageModule { }
