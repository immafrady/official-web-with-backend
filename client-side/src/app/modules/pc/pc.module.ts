import { NgModule } from '@angular/core';
import { PcComponent } from './pc.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PcRoutingModule } from "./pc-routing.module";
import {PcSharedModule} from "./shared/pc-shared.module";
import {CommonModule} from "@angular/common";
import {NgxEchartsModule} from "ngx-echarts";


@NgModule({
  declarations: [PcComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    PcSharedModule,
    PcRoutingModule,
    NgxEchartsModule
  ],
  exports: [PcComponent],
  bootstrap: [PcComponent]
})
export class PcModule { }
