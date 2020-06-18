import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCenterRoutingModule } from './news-center-routing.module';
import {NewsCenterComponent} from "./news-center/news-center.component";
import {PcSharedModule} from "../../shared/pc-shared.module";
import {NewsCenterMoreComponent} from "./news-center-more/news-center-more.component";
import {NzPaginationModule} from "ng-zorro-antd";


@NgModule({
  declarations: [
    NewsCenterComponent,
    NewsCenterMoreComponent
  ],
  imports: [
    CommonModule,
    NewsCenterRoutingModule,
    PcSharedModule,
    NzPaginationModule
  ],
  bootstrap: [
    NewsCenterComponent
  ]
})
export class NewsCenterModule { }
