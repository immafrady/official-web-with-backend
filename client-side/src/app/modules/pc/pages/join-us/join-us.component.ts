import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BasePageComponent} from "../../../../shared/base-page.component";
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {getImage} from "../../../../../utils/getImage";

@Component({
  selector: 'pc-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JoinUsComponent extends BasePageComponent implements OnInit {
  size = 1;
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  listOfData = [
    {
      id: 1,
      position: '高级UI设计师',
      type: '设计类',
      address: '广州',
      date: '2020-06-12',
      expand: false,
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      id: 2,
      position: '高级UI设计师',
      type: '设计类',
      address: '广州',
      date: '2020-06-12',
      expand: false,
      description: 'My name is John Brown, I am 32 years old, living in New York No. 2 Lake Park.'
    },
    {
      id: 3,
      position: '高级UI设计师',
      type: '设计类',
      address: '广州',
      date: '2020-06-12',
      expand: false,
      description: 'My name is John Brown, I am 32 years old, living in New York No. 3 Lake Park.'
    },
  ];
  getImage = getImage;

  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  ngOnInit(): void {
  }

}
