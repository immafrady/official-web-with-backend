import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-picture-manager',
  templateUrl: './picture-manager.component.html',
  styleUrls: ['./picture-manager.component.scss']
})
export class PictureManagerComponent implements OnInit {
  pictureList = [{ title: '555'}];
  total: number;
  constructor() { }

  ngOnInit(): void {
  }

  deleteArticle(id): void {

  }
}
