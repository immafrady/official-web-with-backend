import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "../../../../shared/base-page.component";

@Component({
  selector: 'pc-xin-town',
  templateUrl: './xin-town.component.html',
  styleUrls: ['./xin-town.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class XinTownComponent extends BasePageComponent implements OnInit {

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
