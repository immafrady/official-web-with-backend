import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinUsRoutingModule } from './join-us-routing.module';
import {PcSharedModule} from '@pc/shared/pc-shared.module';
import {JoinUsComponent} from "./join-us.component";
import {NzTableModule, NzTabsModule, NzIconModule, NzTagModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    JoinUsComponent
  ],
  imports: [
    CommonModule,
    JoinUsRoutingModule,
    PcSharedModule,
    NzTabsModule,
    NzTableModule,
    FormsModule,
    NzIconModule,
    NzTagModule
  ]
})
export class JoinUsModule { }
