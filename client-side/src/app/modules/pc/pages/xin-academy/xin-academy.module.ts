import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XinAcademyRoutingModule } from './xin-academy-routing.module';
import { XinAcademyComponent } from './xin-academy.component';
import {PcSharedModule} from '@pc/shared/pc-shared.module';


@NgModule({
  declarations: [XinAcademyComponent],
  imports: [
    CommonModule,
    XinAcademyRoutingModule,
    PcSharedModule
  ]
})
export class XinAcademyModule { }
