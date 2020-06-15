import { NgModule } from '@angular/core';
import {NzButtonModule, NzCarouselModule} from "ng-zorro-antd";

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import {PcSharedModule} from "../../shared/pc-shared.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [HomeComponent, HomeCarouselComponent],
  imports: [
    CommonModule,
    PcSharedModule,
    HomeRoutingModule,
    NzCarouselModule,
    NzButtonModule
  ],
})
export class HomeModule { }
