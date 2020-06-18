import { NgModule } from '@angular/core';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [SvgIconComponent],
  imports: [AngularSvgIconModule, CommonModule],
  exports: [SvgIconComponent]
})
export class GlobalSharedModule { }
