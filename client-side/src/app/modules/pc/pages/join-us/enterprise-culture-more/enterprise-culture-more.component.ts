import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent} from "@web-aid-kit/ngx-image-gallery";
import * as Masonry from 'masonry-layout'
import * as imagesLoaded from 'imagesloaded'
import {isPlatformBrowser} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {PictureTypeLabel} from '@libs/enums/picture';
import {JoinUsService} from "@pc/pages/join-us/join-us.service";


@Component({
  selector: 'pc-enterprise-culture-more',
  templateUrl: './enterprise-culture-more.component.html',
  styleUrls: ['./enterprise-culture-more.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EnterpriseCultureMoreComponent implements OnInit, AfterViewInit {
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  type:string;
  PictureTypeLabel = PictureTypeLabel;
  isSpinning = true;
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: true,
  };
  imgList: GALLERY_IMAGE[] = [];

  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  constructor(
    private JoinUsService: JoinUsService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  getPictureList(type): void {
    this.JoinUsService.getPictureList({ type }).subscribe(({ data }) => {
      this.imgList = data.list;
      setTimeout(() => {
        this.fetchWaterfall()
      }, 0)
    })
  }
  fetchWaterfall() {
    if (isPlatformBrowser(this.platformId)) {
      imagesLoaded('.waterfall', () => {
        new Masonry('.waterfall', {
          itemSelector: '.waterfall-img',
          columnWidth: 285,
          gutter: 20
        });
        this.isSpinning = false;
      });
    }
  }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    this.getPictureList(this.type)
  }

  ngAfterViewInit(): void {
    this.fetchWaterfall()
  }
}
