import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCenterRoutingModule } from './news-center-routing.module';
import {NewsCenterComponent} from "./news-center.component";
import {PcSharedModule} from "../../shared/pc-shared.module";


@NgModule({
  declarations: [
    NewsCenterComponent
  ],
  imports: [
    CommonModule,
    NewsCenterRoutingModule,
    PcSharedModule
  ]
})
export class NewsCenterModule { }
