import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BigDataType} from "@libs/enums/big-data";
import {UploadFile} from "ng-zorro-antd";
import {uploadAliyun} from "@/utils/uploadAliOss";
import {BigDataManageService} from "@admin/pages/big-data-manage/big-data-manage.service";

@Component({
  selector: 'admin-big-data-manage',
  templateUrl: './big-data-manage.component.html',
  styleUrls: ['./big-data-manage.component.scss']
})
export class BigDataManageComponent implements OnInit {
  validateForm: FormGroup;
  provideValidateForm: FormGroup;
  enterpriseCountValidateForm: FormGroup;
  nationwideServiceTotalNumberValidateForm: FormGroup;
  nationwideServiceTotalCountValidateForm: FormGroup;
  nationwideClientDistributionValidateForm: FormGroup;
  freelancerArealDistributionValidateForm: FormGroup;
  xinTownNationDistributionValidateForm: FormGroup;
  BigDataType = BigDataType;
  loading1 = false;
  loading2 = false;
  loading3 = false;

  constructor(
    private fb: FormBuilder,
    private bigDataManageService: BigDataManageService
  ) { }

  get monthlyNewServiceCount() {
    return this.validateForm.get(BigDataType.MonthlyNewServiceCount) as FormArray;
  }

  get freelancerIndustryDistribution() {
    return this.validateForm.get(BigDataType.FreelancerIndustryDistribution) as FormArray;
  }

  get freelancerIncomeDistribution() {
    return this.validateForm.get(BigDataType.FreelancerIncomeDistribution) as FormArray;
  }

  getBigDataList(): void {
    this.bigDataManageService.getBigDataList().subscribe(({ data }) => {
      console.log(data);
      this.validateForm.patchValue({ [BigDataType.MonthlyNewServiceCount]: data[BigDataType.MonthlyNewServiceCount] });
      this.validateForm.patchValue({ [BigDataType.NationwideServiceTotalNumber] : data[BigDataType.NationwideServiceTotalNumber]});
      this.validateForm.patchValue({ [BigDataType.FreelancerIncomeDistribution]: data[BigDataType.FreelancerIncomeDistribution] });
      this.provideValidateForm.patchValue(data[BigDataType.RealtimePayDetail]);
      this.enterpriseCountValidateForm.patchValue({ [BigDataType.EnterpriseCount]: data[BigDataType.EnterpriseCount] });
      this.nationwideServiceTotalNumberValidateForm.patchValue({ [BigDataType.NationwideServiceTotalNumber] : data[BigDataType.NationwideServiceTotalNumber] });
      this.nationwideServiceTotalCountValidateForm.patchValue({ [BigDataType.NationwideServiceTotalCount]: data[BigDataType.NationwideServiceTotalCount] });
      this.nationwideClientDistributionValidateForm.patchValue({ [BigDataType.NationwideClientDistribution]: data[BigDataType.NationwideClientDistribution] });
      this.freelancerArealDistributionValidateForm.patchValue({ [BigDataType.FreelancerArealDistribution]: data[BigDataType.FreelancerArealDistribution] });
      this.xinTownNationDistributionValidateForm.patchValue({ [BigDataType.XinTownNationDistribution]: data[BigDataType.XinTownNationDistribution] });
    })
  }

  customRequest(): void {}
  handleChange(info: { file: UploadFile }, form, type, loading): void {
    this[loading] = true;
    uploadAliyun(info.file.originFileObj).then(res => {
      this[loading] = false;
      this[form].patchValue({ [type]: res.url });
    }).catch(() => { this[loading] = false })
  }

  addStage(autoList): void {
    (this.validateForm.get(autoList) as FormArray).push(
      this.fb.group({
        key: [null, [Validators.required]],
        value: [null, [Validators.required]]
      })
    );
  }

  removeStage(workflowIndex: number, autoList): void {
    (this.validateForm.get(autoList) as FormArray).removeAt(workflowIndex);
  }

  submitForm(key, form, way?): void {
    for (const i in this[form].controls) {
      this[form].controls[i].markAsDirty();
      this[form].controls[i].updateValueAndValidity();
    }
    this.bigDataManageService.saveBigData({ key, value: way ? this[form].value : this[form].value[key] }).subscribe(res => {

    })
  }

  ngOnInit(): void {
    this.getBigDataList();
    this.validateForm = this.fb.group({
      [BigDataType.MonthlyNewServiceCount]: this.fb.array([
        this.fb.group({
          key: [null, [Validators.required]],
          value: [null, [Validators.required]]
        })
      ]),
      [BigDataType.FreelancerIndustryDistribution]: this.fb.array([
        this.fb.group({
          key: [null, [Validators.required]],
          value: [null, [Validators.required]]
        })
      ]),
      [BigDataType.FreelancerIncomeDistribution]: this.fb.array([
        this.fb.group({
          key: [null, [Validators.required]],
          value: [null, [Validators.required]]
        })
      ])
    });

    this.provideValidateForm = this.fb.group({
      min: [null, Validators.required],
      max: [null, Validators.required],
      prefix: [null, Validators.required]
    });

    this.enterpriseCountValidateForm = this.fb.group({
      [BigDataType.EnterpriseCount]: [null, Validators.required]
    });

    this.nationwideServiceTotalNumberValidateForm = this.fb.group({
      [BigDataType.NationwideServiceTotalNumber]: [null, Validators.required]
    });

    this.nationwideServiceTotalCountValidateForm = this.fb.group({
      [BigDataType.NationwideServiceTotalCount]: [null, [Validators.required]]
    });

    this.nationwideClientDistributionValidateForm = this.fb.group({
      [BigDataType.NationwideClientDistribution]: [null, [Validators.required]]
    });

    this.freelancerArealDistributionValidateForm = this.fb.group({
      [BigDataType.FreelancerArealDistribution]: [null, [Validators.required]]
    });

    this.xinTownNationDistributionValidateForm = this.fb.group({
      [BigDataType.XinTownNationDistribution]: [null, [Validators.required]]
    });
  }
}
