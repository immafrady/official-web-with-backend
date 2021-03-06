import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import {AboutUsComponent} from "./about-us.component";
import {PcSharedModule} from '@pc/shared/pc-shared.module';
import {NzIconModule, NzTimelineModule} from "ng-zorro-antd";


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    PcSharedModule,
    NzTimelineModule,
    NzIconModule
  ]
})
export class AboutUsModule { }
