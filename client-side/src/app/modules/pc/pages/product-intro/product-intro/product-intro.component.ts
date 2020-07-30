import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BasePageComponent} from '@/app/shared/base-page.component';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {getImage} from '@/utils/getImage';

@Component({
  selector: 'pc-product-intro',
  templateUrl: './product-intro.component.html',
  styleUrls: ['./product-intro.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductIntroComponent extends BasePageComponent implements OnInit {
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
