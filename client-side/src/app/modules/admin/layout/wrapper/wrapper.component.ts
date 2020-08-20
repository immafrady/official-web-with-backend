import { Component, OnInit } from '@angular/core';
import {getImage} from '@/utils/getImage';

interface IStructureItem {
  label: string;
  icon?: string;
  link?: string;
  children?: IStructureItem[]
}

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  getImage = getImage;

  structure: IStructureItem[] = [{
    label: '文章管理',
    icon: 'form',
    link: '/admin/news-list'
  }, {
    label: '图片管理',
    icon: 'picture',
    link: '/admin/picture-manager'
  }, {
    label: '招聘设置',
    icon: 'setting',
    children: [{
      label: '部门管理',
      link: '/admin/department-manager'
    }, {
      label: '招聘管理',
      link: '/admin/recruitment-manager'
    }]
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
