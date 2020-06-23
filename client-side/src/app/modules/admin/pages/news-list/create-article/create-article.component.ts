import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticlePriority, ArticleStatus, ArticleType} from "../../../../../../../../libs/enums/article";
import {CreateArticleService} from "./create-article.service";
import {IArticleCreateOptions, IArticleModifyOptions} from "../../../../../../../../libs/request/article";
import {ActivatedRoute, Router} from "@angular/router";
import {UploadFile} from 'ng-zorro-antd/upload';
import {appendFileNameSearchParam, uploadAliyun} from "../../../../../../utils/uploadAliOss";

@Component({
  selector: 'admin-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateArticleComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;
  tinyOptions = {
    base_url: '/tinymce',
    language: 'zh_CN',
    suffix: '.min',
    language_url : '/assets/tinymce/langs/zh_CN.js',
    plugins: 'image',
    toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | image',
    images_upload_handler: (blobInfo, succFun, failFun) => {
      const file = blobInfo.blob();
      uploadAliyun(file).then(res => {
        succFun(appendFileNameSearchParam(res.url, res.name))
      }).catch(() => {
        failFun('上传失败')
      })
    }
  };
  statusOptions = [{
    value: ArticleStatus.Online,
    label: '已上线'
  }, {
    value: ArticleStatus.Offline,
    label: '已下线'
  }];
  priorityOptions = [{
    value: ArticlePriority.Normal,
    label: '普通'
  }, {
    value: ArticlePriority.Important,
    label: '重要'
  }, {
    value: ArticlePriority.VeryImportant,
    label: '非常重要'
  }];
  typeOptions = [{
    value: ArticleType.Hot,
    label: '热门报道'
  }, {
    value: ArticleType.New,
    label: '最新动态'
  }, {
    value: ArticleType.Old,
    label: '往期动态'
  }, {
    value: ArticleType.Honor,
    label: '荣誉奖项'
  }];
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
  customRequest(): void {}
  handleChange(info: { file: UploadFile }): void {
    this.loading = true;
    uploadAliyun(info.file.originFileObj).then(res => {
      this.validateForm.patchValue({ thumbnail: appendFileNameSearchParam(res.url, res.name) });
      this.loading = false
    }).catch(() => { this.loading = false })
  }
  getArticleDetail(id): void {
    this.CreateArticleService.getArticleContent(id).subscribe(({ data }) => {
      this.validateForm.patchValue(data.article);
    });
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      status: [null, [Validators.required]],
      priority:[null, [Validators.required]],
      modifyDate:[null, [Validators.required]],
      content:[null, [Validators.required]],
      type:[null, [Validators.required]],
      thumbnail:[null, [Validators.required]],
      id: [null, [Validators.required]]
    });
    this.route.params.subscribe(data => {
      const id = +data.id;
      if (id) {
        this.validateForm.patchValue({ id });
        this.getArticleDetail(id)
      }
    })
  }
}
