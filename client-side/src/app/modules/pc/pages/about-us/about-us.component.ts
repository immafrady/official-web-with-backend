import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from '@/app/shared/base-page.component';
import { BASE_64_IMG } from "src/config/images";
import {PicturePriority, PictureType} from "@libs/enums/picture";
import {JoinUsService} from "@pc/pages/join-us/join-us.service";
import { IncidentManagerService } from "@/app/shared/api/incident-manager.service";
import { IListYearListFormattedDetailResult, IListYearListWithoutNoDetailResult } from "@libs/response/incident";

@Component({
  selector: 'pc-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent extends BasePageComponent implements OnInit {
  base64Pics = BASE_64_IMG;
  honorSliceList = [];
  honorList = [];
  expandActive = false;
  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router,
    private JoinUsService: JoinUsService,
    private incidentService: IncidentManagerService
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  dateList: IListYearListWithoutNoDetailResult = [];

  currIndex = 0;

  get currentTab() {
    return this.dateList[this.currIndex]
  }

  get displayDateList() {
      const tabLength = 5;
      const startPos = this.currIndex - 2;
      const endPos = startPos + tabLength;
    if (startPos <= 0) {
      return this.dateList.slice(0, tabLength)
    } else if (endPos >= this.dateList.length) {
      return this.dateList.slice(this.dateList.length - tabLength, this.dateList.length)
    } else {
      return this.dateList.slice(startPos, endPos)
    }
  }

  dateDictionary: IListYearListFormattedDetailResult = {};

  ngOnInit(): void {
    this.getPictureList();
    this.getIncidentList();
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

  selectTab(year: string): void {
    for (let i = 0; i < this.dateList.length; i++) {
      if (this.dateList[i].year === year) {
        this.currIndex = i;
        return;
      }
    }
  }

  getIncidentList(): void {
    this.incidentService.getCommonList().subscribe(({ data }) => {
      this.dateList = data.yearList;
      this.dateDictionary = data.details;
      this.currIndex = data.yearList.length - 1;
    })
  }

  getPictureList(): void {
    this.JoinUsService.getPictureList({ type: PictureType.Honor , priority: PicturePriority.Normal }).subscribe(({ data }) => {
      this.honorList = data.list;
      this.honorSliceList = data.list.slice(0, 8)
    })
  }

  expandMore(): void {
    this.expandActive = !this.expandActive;
    this.honorSliceList = this.expandActive ? this.honorList : this.honorList.slice(0, 8)
  }
}
