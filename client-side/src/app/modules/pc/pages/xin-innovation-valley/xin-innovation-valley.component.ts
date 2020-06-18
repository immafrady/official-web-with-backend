import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "../../../../shared/base-page.component";
import {getImage} from "../../../../../utils/getImage";

@Component({
  selector: 'pc-xin-innovation-valley',
  templateUrl: './xin-innovation-valley.component.html',
  styleUrls: ['./xin-innovation-valley.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class XinInnovationValleyComponent extends BasePageComponent implements OnInit {
  getImage = getImage;
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
