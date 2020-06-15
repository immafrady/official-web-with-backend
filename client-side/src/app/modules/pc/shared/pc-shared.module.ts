import { NgModule } from '@angular/core';
import {GlobalSharedModule} from "../../../shared/global-shared.module";
import {CoreContainerComponent} from "./core-container/core-container.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CoreContainerComponent],
  imports: [
    CommonModule,
    GlobalSharedModule
  ],
  exports: [
    CoreContainerComponent
  ]
})
export class PcSharedModule { }
