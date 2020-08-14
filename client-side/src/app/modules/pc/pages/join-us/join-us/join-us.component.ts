import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BasePageComponent} from '@/app/shared/base-page.component';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {getImage} from '@/utils/getImage';
import {PicturePriority, PictureType} from '@libs/enums/picture'
import {JoinUsService} from "@pc/pages/join-us/join-us.service";
import { IJobDetailEntity } from "@libs/entity/job";

@Component({
  selector: 'pc-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JoinUsComponent extends BasePageComponent implements OnInit {
  PictureType = PictureType;
  positionType = '';
  rotateActive = false;
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    this.rotateActive = true;
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  departments: string[] = [];
  recruitDetail: { [departmentName: string]: IJobDetailEntity[] } = {};
  getImage = getImage;
  environmentPicture = [];
  friendPicture = [];
  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router,
    private JoinUsService: JoinUsService
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  getPictureList(type, list): void {
    this.JoinUsService.getPictureList({ type, size: 6, page: 1, priority: PicturePriority.Important }).subscribe(({ data }) => {
      this[list] = data.list
    })
  }

  getJobList(): void {
    this.JoinUsService.getJobList().subscribe(({ data }) => {
      this.departments = data.departments;
      this.positionType = data.departments[0];
      this.recruitDetail = data.details
    })
  }

  currIndex = 0;

  get currentTab() {
    return this.departments[this.currIndex];
  }

  get displayDepartmentList() {
    const tabLength = 7;
    if (this.departments?.length < tabLength) {
      return this.departments;
    } else {
      const startPos = this.currIndex - 2;
      const endPos = startPos + tabLength;
      if (startPos <= 0) {
        return this.departments.slice(0, tabLength)
      } else if (endPos >= this.departments.length) {
        return this.departments.slice(this.departments.length - tabLength, this.departments.length)
      } else {
        return this.departments.slice(startPos, endPos)
      }
    }
  }

  clickArrow(type: 'left' | 'right'): void {
    if (type === "left") {
      this.currIndex--;
      if (this.currIndex < 0) {
        this.currIndex = 0;
      }
    } else if (type === "right") {
      this.currIndex++;
      if (this.currIndex >= this.departments.length) {
        this.currIndex = this.departments.length - 1;
      }
    }
  }

  selectTab(label: string): void {
    this.expandSet = new Set<number>();
    this.rotateActive = false;
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i] === label) {
        this.currIndex = i;
        return;
      }
    }
  }

  ngOnInit(): void {
    this.getPictureList( PictureType.Environment, 'environmentPicture');
    this.getPictureList( PictureType.Friend, 'friendPicture');
    this.getJobList()
  }

}
