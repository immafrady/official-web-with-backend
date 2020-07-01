import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ArticlePriority, ArticlePriorityLabel,
  ArticleStatus,
  ArticleStatusLabel,
  ArticleType, ArticleTypeLabel
} from '@libs/enums/article';
import { CreateArticleService } from './create-article.service';
import { IArticleModifyOptions } from '@libs/request/article';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFile } from 'ng-zorro-antd/upload';
import { appendFileNameSearchParam, uploadAliyun } from '@/utils/uploadAliOss';

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
    language_url : '/assets/tinymce/langs/zh_CN.js', // 语言 中文
    plugins: 'image, link, preview, table, emoticons, paste', // 插件 图片/超链接/预览/表格/表情
    default_link_target: "_blank", // 打开的超链接新的地址打开
    image_advtab: true, // 上传的图片的css样式（内置style）、边距（margin）和边框（border）
    toolbar: 'undo redo | formatselect | bold italic backcolor | table tabledelete | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | image | link | paste | emoticons | preview',
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
    label: ArticleStatusLabel[ArticleStatus.Online]
  }, {
    value: ArticleStatus.Offline,
    label: ArticleStatusLabel[ArticleStatus.Offline]
  }];
  priorityOptions = [{
    value: ArticlePriority.Normal,
    label: ArticlePriorityLabel[ArticlePriority.Normal]
  }, {
    value: ArticlePriority.Important,
    label: ArticlePriorityLabel[ArticlePriority.Important]
  }, {
    value: ArticlePriority.VeryImportant,
    label: ArticlePriorityLabel[ArticlePriority.VeryImportant]
  }];
  typeOptions = [{
    value: ArticleType.Hot,
    label: ArticleTypeLabel[ArticleType.Hot]
  }, {
    value: ArticleType.New,
    label: ArticleTypeLabel[ArticleType.New]
  }, {
    value: ArticleType.Old,
    label: ArticleTypeLabel[ArticleType.Old]
  }, {
    value: ArticleType.Honor,
    label: ArticleTypeLabel[ArticleType.Honor]
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
      id: [null]
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
