import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentManagerRoutingModule } from './recruitment-manager-routing.module';
import { RecruitmentManagerComponent } from './recruitment-manager/recruitment-manager.component';
import { EditRecruitInfoComponent } from './edit-recruit-info/edit-recruit-info.component';
import {
  NzButtonModule, NzDatePickerModule,
  NzFormModule,
  NzGridModule,
  NzInputModule, NzSelectModule, NzSwitchModule,
  NzTableModule,
  NzToolTipModule,
  NzWaveModule
} from "ng-zorro-antd";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [RecruitmentManagerComponent, EditRecruitInfoComponent],
  imports: [
    CommonModule,
    RecruitmentManagerRoutingModule,
    NzWaveModule,
    NzTableModule,
    NzToolTipModule,
    NzButtonModule,
    NzGridModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzSwitchModule,
    NzDatePickerModule
  ]
})
export class RecruitmentManagerModule { }
