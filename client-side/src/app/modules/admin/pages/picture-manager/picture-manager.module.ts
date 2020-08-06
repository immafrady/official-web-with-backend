import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureManagerRoutingModule } from './picture-manager-routing.module';
import { EditPictureComponent } from './edit-picture/edit-picture.component';
import { PictureManagerComponent } from './picture-manager/picture-manager.component';
import {
  NzButtonModule, NzDatePickerModule,
  NzFormModule, NzGridModule, NzIconModule,
  NzInputModule,
  NzSelectModule,
  NzTableModule,
  NzToolTipModule,
  NzUploadModule
} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EditPictureComponent, PictureManagerComponent],
  imports: [
    CommonModule,
    PictureManagerRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzToolTipModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzGridModule,
    NzUploadModule,
    FormsModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzIconModule
  ]
})
export class PictureManagerModule { }
