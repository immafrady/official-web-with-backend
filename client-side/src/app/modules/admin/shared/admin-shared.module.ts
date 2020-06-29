import { NgModule } from '@angular/core';
import {GlobalSharedModule} from '@/app/shared/global-shared.module';



@NgModule({
  declarations: [],
  imports: [
    GlobalSharedModule
  ],
  exports: [
    GlobalSharedModule
  ]
})
export class AdminSharedModule { }
