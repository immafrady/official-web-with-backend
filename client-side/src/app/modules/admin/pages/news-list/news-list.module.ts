import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsListRoutingModule } from './news-list-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import {
  NzButtonModule,
  NzDatePickerModule,
  NzFormModule,
  NzGridModule, NzIconModule,
  NzInputModule,
  NzSelectModule,
  NzTableModule, NzToolTipModule,
  NzUploadModule
} from "ng-zorro-antd";
import {NewsLIstService} from "./news-list.service";
import {CreateArticleComponent} from "./create-article/create-article.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EditorModule, TINYMCE_SCRIPT_SRC} from "@tinymce/tinymce-angular";
import {CreateArticleService} from "./create-article/create-article.service";
import { AdminSharedModule } from '@admin/shared/admin-shared.module';
import { PreviewArticleComponent } from './preview-article/preview-article.component';
import { PcSharedModule } from '@pc/shared/pc-shared.module';


@NgModule({
  declarations: [NewsListComponent, CreateArticleComponent, PreviewArticleComponent],
  imports: [
    CommonModule,
    NewsListRoutingModule,
    NzTableModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzGridModule,
    NzInputModule,
    NzFormModule,
    NzDatePickerModule,
    EditorModule,
    NzUploadModule,
    NzIconModule,
    NzToolTipModule,
    AdminSharedModule,
    PcSharedModule
  ],
  providers: [
    NewsLIstService,
    CreateArticleService,
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [NewsListComponent]
})
export class NewsListModule { }
