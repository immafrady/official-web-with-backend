import { NgModule } from '@angular/core';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import {AngularSvgIconModule} from "angular-svg-icon";

@NgModule({
  declarations: [SvgIconComponent],
  imports: [AngularSvgIconModule],
  exports: [SvgIconComponent]
})
export class GlobalSharedModule { }
