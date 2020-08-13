import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentManagerRoutingModule } from './recruitment-manager-routing.module';
import { RecruitmentManagerComponent } from './recruitment-manager/recruitment-manager.component';
import { EditRecruitInfoComponent } from './edit-recruit-info/edit-recruit-info.component';
import {NzButtonModule, NzTableModule, NzToolTipModule, NzWaveModule} from "ng-zorro-antd";


@NgModule({
  declarations: [RecruitmentManagerComponent, EditRecruitInfoComponent],
  imports: [
    CommonModule,
    RecruitmentManagerRoutingModule,
    NzWaveModule,
    NzTableModule,
    NzToolTipModule,
    NzButtonModule
  ]
})
export class RecruitmentManagerModule { }
