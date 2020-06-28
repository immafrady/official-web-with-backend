import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "../../../../../shared/mixins/base-page.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from "../login.service";

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent extends BasePageComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private LoginService: LoginService
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const username = this.validateForm.controls.username.value;
    const password = this.validateForm.controls.password.value;
    if (username && password) {
      this.LoginService.login({ username, password }).subscribe(res => {
        this.router.navigateByUrl('/admin/news-list')
      })
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

}
