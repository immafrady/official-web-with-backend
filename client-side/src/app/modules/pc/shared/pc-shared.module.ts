import { NgModule } from '@angular/core';
import {GlobalSharedModule} from "../../../shared/global-shared.module";
import {CoreContainerComponent} from "./core-container/core-container.component";
import {CommonModule} from "@angular/common";
import { NewsPreviewComponent } from './news-preview/news-preview.component';
import {RouterModule} from "@angular/router";
import {NzCardModule} from "ng-zorro-antd";

@NgModule({
  declarations: [CoreContainerComponent, NewsPreviewComponent],
  imports: [
    CommonModule,
    GlobalSharedModule,
    RouterModule,
    NzCardModule
  ],
  exports: [
    CoreContainerComponent,
    NewsPreviewComponent,
    GlobalSharedModule
  ]
})
export class PcSharedModule { }
