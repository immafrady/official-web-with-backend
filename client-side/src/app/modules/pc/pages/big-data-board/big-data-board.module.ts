import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigDataBoardRoutingModule } from './big-data-board-routing.module';
import { BigDataBoardComponent } from './big-data-board.component';
import {NgxEchartsModule} from "ngx-echarts";


@NgModule({
  declarations: [BigDataBoardComponent],
  imports: [
    CommonModule,
    BigDataBoardRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class BigDataBoardModule { }
