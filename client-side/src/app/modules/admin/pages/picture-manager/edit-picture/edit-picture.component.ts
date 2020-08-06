import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UploadFile} from "ng-zorro-antd";
import {uploadAliyun} from "@/utils/uploadAliOss";
import {ActivatedRoute, Router} from "@angular/router";
import {PicturePriority, PicturePriorityLabel, PictureType, PictureTypeLabel} from "@libs/enums/picture";
import {EditPictureService} from "@admin/pages/picture-manager/edit-picture/edit-picture.service";

@Component({
  selector: 'admin-edit-picture',
  templateUrl: './edit-picture.component.html',
  styleUrls: ['./edit-picture.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditPictureComponent implements OnInit {
  validateForm: FormGroup;
  urls = [];
  pictureId: number;
  previewPicture: string;
  priorityOptions = [{
    value: PicturePriority.Normal,
    label: PicturePriorityLabel[PicturePriority.Normal]
  }, {
    value: PicturePriority.Important,
    label: PicturePriorityLabel[PicturePriority.Important]
  }];
  typeOptions = [{
    value: PictureType.Environment,
    label: PictureTypeLabel[PictureType.Environment]
  }, {
    value: PictureType.Friend,
    label: PictureTypeLabel[PictureType.Friend]
  }];
  constructor(
    private fb: FormBuilder,
    private EditPictureService: EditPictureService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  submitForm(): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity()
    }
    const formData = this.validateForm.value;
    formData.urls = this.urls;
    if (this.pictureId) {
      this.EditPictureService.modifyPicture(this.pictureId, formData).subscribe(() => {
        this.router.navigate(['/admin/picture-manager'])
      })
    } else {
      this.EditPictureService.savePicture(formData).subscribe(() => {
        this.router.navigate(['/admin/picture-manager'])
      })
    }
  }

  customRequest(): void {}
  handleChange(info: { file: UploadFile }): void {
    uploadAliyun(info.file.originFileObj).then(res => {
      this.urls.push(res.url);
    })
  }

  getPictureDetail(): void {
    this.EditPictureService.getPictureDetail(this.pictureId).subscribe(({ data }) => {
      this.validateForm.patchValue(data);
      this.previewPicture = data.url
    })
  }

  deletePicture(index): void {
    this.urls.splice(index, 1)
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      comment: [null],
      priority: [null, [Validators.required]],
      type: [null, [Validators.required]],
      modifyDate:[null, [Validators.required]]
    });

    this.route.paramMap.subscribe(({ params }) => {
      this.pictureId = +params.params.id;
      this.getPictureDetail()
    })
  }

}
