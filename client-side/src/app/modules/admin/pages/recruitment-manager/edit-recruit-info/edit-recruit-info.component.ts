import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RecruitmentManagerService} from "@admin/pages/recruitment-manager/recruitment-manager.service";
import {IJobDepartmentEntity} from "@libs/entity/job";
import {JobStatus, JobStatusLabel} from "@libs/enums/job";
import {DepartmentManagerService} from "@admin/pages/department-manager/department-manager.service";

@Component({
  selector: 'admin-edit-recruit-info',
  templateUrl: './edit-recruit-info.component.html',
  styleUrls: ['./edit-recruit-info.component.scss']
})
export class EditRecruitInfoComponent implements OnInit {

  validateForm: FormGroup;
  id = null;
  statusOptions = [{
    value: JobStatus.Online,
    label: JobStatusLabel[JobStatus.Online]
  }, {
    value: JobStatus.Offline,
    label: JobStatusLabel[JobStatus.Offline]
  }];
  departmentOptions: IJobDepartmentEntity[];
  constructor(
    private fb: FormBuilder,
    private RecruitmentManagerService: RecruitmentManagerService,
    private DepartmentManagerService: DepartmentManagerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      location: [null, [Validators.required]],
      departmentId: [null, [Validators.required]],
      status: [null, [Validators.required]],
      eager: [null, [Validators.required]],
      hot: [null, [Validators.required]],
      modifyDate: [null, [Validators.required]],
      duty:[null],
      requirement:[null],
      other:[null],
      id: [null]
    });

    this.getDepartmentList();
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getRecruitmentContent()
    }
  }

  getRecruitmentContent(): void {
    this.RecruitmentManagerService.getRecruitmentContent(this.id).subscribe(({ data }) => {
      this.validateForm.patchValue(data);
      this.validateForm.patchValue({
        departmentId: data.department.id,
        duty: data.content.duty,
        requirement: data.content.requirement,
        other: data.content.other,
      })
    })
  }

  getDepartmentList(): void {
    this.DepartmentManagerService.getDepartmentList().subscribe(({ data }) => {
      this.departmentOptions = data.list;
    })
  }

  submitForm(): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity()
    }
    let formValue = this.validateForm.value;
    let content = {};
    content['duty'] = formValue.duty;
    content['requirement'] = formValue.requirement;
    content['other'] = formValue.other;
    formValue.content = content;
    formValue.id = this.id ? this.id : 0;
    this.RecruitmentManagerService.saveRecruitment(formValue).subscribe(() => {
      this.router.navigate(['/admin/recruitment-manager'])
    })
  }

}
