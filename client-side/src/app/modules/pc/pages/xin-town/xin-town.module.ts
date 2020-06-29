import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XinTownRoutingModule } from './xin-town-routing.module';
import { XinTownComponent } from './xin-town.component';
import {PcSharedModule} from '@pc/shared/pc-shared.module';


@NgModule({
  declarations: [XinTownComponent],
  imports: [
    CommonModule,
    XinTownRoutingModule,
    PcSharedModule
  ]
})
export class XinTownModule { }
