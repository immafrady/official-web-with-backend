import { Component, OnInit } from '@angular/core';
import {RecruitmentManagerService} from "@admin/pages/recruitment-manager/recruitment-manager.service";
import {JobStatus, JobStatusLabel} from '@libs/enums/job';

@Component({
  selector: 'admin-recruitment-manager',
  templateUrl: './recruitment-manager.component.html',
  styleUrls: ['./recruitment-manager.component.scss']
})
export class RecruitmentManagerComponent implements OnInit {
  JobStatusLabel = JobStatusLabel;
  JobStatus = JobStatus;
  recruitmentList = [];
  total = 0;
  constructor(
    private RecruitmentManagerService: RecruitmentManagerService
  ) { }

  ngOnInit(): void {
    this.getRecruitmentList()
  }

  getRecruitmentList(): void {
    this.RecruitmentManagerService.getRecruitmentList().subscribe(({ data }) => {
      this.recruitmentList = data.list;
      this.total = data.total
    })
  }

  deleteRecruit(id): void {
    this.RecruitmentManagerService.deleteRecruitment(id).subscribe(() => {
      this.getRecruitmentList()
    })
  }

  handlerRecruit(id): void {

  }

}
