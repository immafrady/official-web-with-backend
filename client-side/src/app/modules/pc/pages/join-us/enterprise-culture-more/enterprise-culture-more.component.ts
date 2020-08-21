import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {GALLERY_CONF, NgxImageGalleryComponent} from "@web-aid-kit/ngx-image-gallery";
import {ActivatedRoute} from "@angular/router";
import {PictureType, PictureTypeLabel} from '@libs/enums/picture';
import {JoinUsService} from "@pc/pages/join-us/join-us.service";


@Component({
  selector: 'pc-enterprise-culture-more',
  templateUrl: './enterprise-culture-more.component.html',
  styleUrls: ['./enterprise-culture-more.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EnterpriseCultureMoreComponent implements OnInit {
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  type:PictureType;
  PictureTypeLabel = PictureTypeLabel;
  isSpinning = true;
  total = null;
  imgList = [];

  conf: GALLERY_CONF = {
    imageOffset: '50px',
    showDeleteControl: false,
    showImageTitle: true,
  };

  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  constructor(
    private JoinUsService: JoinUsService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  getPictureList(page): void {
    this.JoinUsService.getPictureList({ page, size: 12, type: this.type }).subscribe(({ data }) => {
      this.imgList = data.list;
      this.total = data.total;
      this.isSpinning = false
    })
  }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type') as PictureType;
    this.getPictureList(1)
  }
}
