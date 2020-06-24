import { NgModule } from '@angular/core';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import {CommonModule} from "@angular/common";
import { ArticleTypePipe } from './pipes/article-type.pipe';
import { ArticleStatusPipe } from './pipes/article-status.pipe';
import { RichTextNoSanitizePipe } from './pipes/rich-text-no-sanitize.pipe';

@NgModule({
  declarations: [SvgIconComponent, ArticleTypePipe, ArticleStatusPipe, RichTextNoSanitizePipe],
  imports: [AngularSvgIconModule, CommonModule],
  exports: [SvgIconComponent, ArticleTypePipe, ArticleStatusPipe, RichTextNoSanitizePipe]
})
export class GlobalSharedModule { }
