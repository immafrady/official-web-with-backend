import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XinInnovationValleyRoutingModule } from './xin-innovation-valley-routing.module';
import { XinInnovationValleyComponent } from './xin-innovation-valley.component';
import {PcSharedModule} from '@pc/shared/pc-shared.module';
import {NzIconModule} from "ng-zorro-antd";


@NgModule({
  declarations: [XinInnovationValleyComponent],
  imports: [
    CommonModule,
    XinInnovationValleyRoutingModule,
    PcSharedModule,
    NzIconModule
  ]
})
export class XinInnovationValleyModule { }
