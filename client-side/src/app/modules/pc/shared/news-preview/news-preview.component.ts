import {Component, Input, OnInit} from '@angular/core';
import {BASE_64_IMG, PATH_SVG} from '@/config/images';

@Component({
  selector: 'pc-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
})
export class NewsPreviewComponent implements OnInit {
  svg = PATH_SVG;

  @Input()
  id: number;
  @Input()
  thumbnail: string;
  @Input()
  title: string;
  @Input()
  date: string|number;
  @Input()
  routerLink: any[] | string | null | undefined;

  routerSpanClass: string = '';
  routerImage: string = BASE_64_IMG.ARROW_DEFAULT;

  constructor() { }

  ngOnInit(): void {}

  handleImageSwitch(bool: boolean): void {
    this.routerSpanClass = bool ? 'hover' : ''
    this.routerImage = bool ? BASE_64_IMG.ARROW_HIGHLIGHT : BASE_64_IMG.ARROW_DEFAULT
  }

}
