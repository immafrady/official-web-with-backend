import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "src/app/shared/base-page.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  ngOnInit(): void {

  }

}
