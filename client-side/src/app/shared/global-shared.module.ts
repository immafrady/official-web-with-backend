import { NgModule } from '@angular/core';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import {CommonModule} from "@angular/common";
import { ArticleTypePipe } from './pipes/article-type.pipe';
import { ArticleStatusPipe } from './pipes/article-status.pipe';
import { RichTextNoSanitizePipe } from './pipes/rich-text-no-sanitize.pipe';
import { PictureTypePipe } from './pipes/picture-type.pipe';
import { PicturePriorityPipe } from './pipes/picture-priority.pipe';

@NgModule({
  declarations: [SvgIconComponent, ArticleTypePipe, ArticleStatusPipe, RichTextNoSanitizePipe, PictureTypePipe, PicturePriorityPipe],
  imports: [AngularSvgIconModule, CommonModule],
  exports: [SvgIconComponent, ArticleTypePipe, ArticleStatusPipe, RichTextNoSanitizePipe, PictureTypePipe, PicturePriorityPipe]
})
export class GlobalSharedModule { }
