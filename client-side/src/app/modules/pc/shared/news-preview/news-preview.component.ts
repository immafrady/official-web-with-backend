import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pc-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
})
export class NewsPreviewComponent implements OnInit {

  @Input()
  thumbnail: string;
  @Input()
  title: string;
  @Input()
  date: string;
  @Input()
  routerLink: any[] | string | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
