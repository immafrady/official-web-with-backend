import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIntroRoutingModule } from './product-intro-routing.module';
import {PcSharedModule} from '@pc/shared/pc-shared.module';
import {ProductIntroComponent} from "./product-intro.component";


@NgModule({
  declarations: [
    ProductIntroComponent
  ],
  imports: [
    CommonModule,
    ProductIntroRoutingModule,
    PcSharedModule
  ]
})
export class ProductIntroModule { }
