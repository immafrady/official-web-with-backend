import { NgModule } from '@angular/core';
import {GlobalSharedModule} from "../../../shared/global-shared.module";
import {CoreContainerComponent} from "./core-container/core-container.component";

@NgModule({
  declarations: [CoreContainerComponent],
  imports: [
    GlobalSharedModule
  ],
  exports: [
    CoreContainerComponent
  ]
})
export class PcSharedModule { }
