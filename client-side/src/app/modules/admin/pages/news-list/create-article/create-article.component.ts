import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticlePriority, ArticleStatus} from "../../../../../../../../libs/enums/article";
import {CreateArticleService} from "./create-article.service";
import {IArticleCreateOptions} from "../../../../../../../../libs/request/article";

@Component({
  selector: 'admin-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  validateForm: FormGroup;
  form:IArticleCreateOptions;
  tinymceOptions = {
    base_url: '/tinymce',
    language: 'zh_CN',
    suffix: '.min',
    language_url : '/assets/tinymce/langs/zh_CN.js',
    toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
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
  constructor(
    private fb: FormBuilder,
    private CreateArticleService: CreateArticleService
  ) { }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.form.title = this.validateForm.controls.title.value;
    this.form.status = this.validateForm.controls.status.value;
    this.form.priority = this.validateForm.controls.priority.value;
    this.form.modifyDate = this.validateForm.controls.modifyDate.value;
    this.form.content = this.validateForm.controls.content.value;
    this.CreateArticleService.saveArticle(this.form)
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      status: [null, [Validators.required]],
      priority:[null, [Validators.required]],
      modifyDate:[null, [Validators.required]],
      content:[null, [Validators.required]]
    });
  }

}
