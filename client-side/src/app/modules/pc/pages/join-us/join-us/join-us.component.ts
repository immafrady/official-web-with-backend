import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BasePageComponent} from '@/app/shared/base-page.component';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {getImage} from '@/utils/getImage';
import {PicturePriority, PictureType} from '@libs/enums/picture'
import {JoinUsService} from "@pc/pages/join-us/join-us.service";
import {BASE_64_IMG} from "@/config/images";

@Component({
  selector: 'pc-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JoinUsComponent extends BasePageComponent implements OnInit {
  base64Pics = BASE_64_IMG;
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
  departments = [];
  recruitDetail = {};
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

  changeRecruitment(type):void {
    this.expandSet = new Set<number>();
    this.rotateActive = false;
    this.positionType = type
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

  clickArrow(type: 'left' | 'right'): void {
    if (type === "left") {
      this.currIndex--;
      if (this.currIndex < 0) {
        this.currIndex = 0;
      }
    } else if (type === "right") {
      this.currIndex++;
      if (this.currIndex >= this.dateList.length) {
        this.currIndex = this.dateList.length - 1;
      }
    }
  }

  ngOnInit(): void {
    this.getPictureList( PictureType.Environment, 'environmentPicture');
    this.getPictureList( PictureType.Friend, 'friendPicture');
    this.getJobList()
  }

}
