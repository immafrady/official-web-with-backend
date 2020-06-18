import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XinInnovationValleyRoutingModule } from './xin-innovation-valley-routing.module';
import { XinInnovationValleyComponent } from './xin-innovation-valley.component';
import {PcSharedModule} from "../../shared/pc-shared.module";


@NgModule({
  declarations: [XinInnovationValleyComponent],
  imports: [
    CommonModule,
    XinInnovationValleyRoutingModule,
    PcSharedModule
  ]
})
export class XinInnovationValleyModule { }
