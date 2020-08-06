import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UploadFile, UploadXHRArgs} from "ng-zorro-antd";
import {uploadAliyun} from "@/utils/uploadAliOss";
import {IArticleModifyOptions} from "@libs/request/article";
import {CreateArticleService} from "@admin/pages/news-list/create-article/create-article.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'admin-edit-picture',
  templateUrl: './edit-picture.component.html',
  styleUrls: ['./edit-picture.component.scss']
})
export class EditPictureComponent implements OnInit {

  validateForm: FormGroup;
  priorityOptions = [];
  typeOptions = [];
  fileList = [];
  urls = [];
  constructor(
    private fb: FormBuilder,
    private CreateArticleService: CreateArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  submitForm(): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity()
    }
    const formData = this.validateForm.value;
    if (formData.id) {
      this.CreateArticleService.saveDetailArticle(formData as IArticleModifyOptions).subscribe(() => {
        this.router.navigate(['/admin/news-list'])
      })
    } else {
      this.CreateArticleService.saveArticle(formData).subscribe(() => {
        this.router.navigate(['/admin/news-list'])
      })
    }
  }
  customRequest(args: UploadXHRArgs ): Subscription {
    args.onSuccess('', args.file, '');
    console.log('here, ', args)
    return new Subscription()
  }
  handleChange(info: { file: UploadFile }): void {
    console.log(info);
    uploadAliyun(info.file.originFileObj).then(res => {
      this.urls.push(res.url);
      console.log(this.urls);
    })
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      status: [null, [Validators.required]],
      modifyDate:[null, [Validators.required]],
      type:[null, [Validators.required]],
      thumbnail:[null, [Validators.required]],
      id: [null]
    });
    this.route.params.subscribe(data => {
      const id = +data.id;
      if (id) {
        this.validateForm.patchValue({ id });
      }
    })
  }

}
