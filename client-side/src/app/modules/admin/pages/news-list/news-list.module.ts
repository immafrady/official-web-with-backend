import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsListRoutingModule } from './news-list-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import {NzTableModule} from "ng-zorro-antd";
import {NewsLIstService} from "./news-list.service";


@NgModule({
  declarations: [NewsListComponent],
  imports: [
    CommonModule,
    NewsListRoutingModule,
    NzTableModule
  ],
  providers: [NewsLIstService],
  bootstrap: [NewsListComponent]
})
export class NewsListModule { }
