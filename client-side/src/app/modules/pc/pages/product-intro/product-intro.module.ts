import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIntroRoutingModule } from './product-intro-routing.module';
import {PcSharedModule} from '@pc/shared/pc-shared.module';
import {ProductIntroComponent} from "./product-intro/product-intro.component";
import { ProductXinpayrollManagerComponent } from './product-xinpayroll-manager/product-xinpayroll-manager.component';
import { ProductSmartStudioComponent } from './product-smart-studio/product-smart-studio.component';
import {NzCarouselModule} from "ng-zorro-antd";


@NgModule({
  declarations: [
    ProductIntroComponent,
    ProductXinpayrollManagerComponent,
    ProductSmartStudioComponent
  ],
  imports: [
    CommonModule,
    ProductIntroRoutingModule,
    PcSharedModule,
    NzCarouselModule
  ]
})
export class ProductIntroModule { }
