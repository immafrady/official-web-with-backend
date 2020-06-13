import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcComponent } from './pc.component';
import { CoreContainerComponent } from './layout/core-container/core-container.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {PcRoutingModule} from "./pc-routing.module";

@NgModule({
  declarations: [PcComponent, CoreContainerComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    PcRoutingModule
  ],
  exports: [PcComponent],
  bootstrap: [PcComponent]
})
export class PcModule { }