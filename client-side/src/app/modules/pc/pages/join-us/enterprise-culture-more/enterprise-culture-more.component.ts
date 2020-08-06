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


@Component({
  selector: 'pc-enterprise-culture-more',
  templateUrl: './enterprise-culture-more.component.html',
  styleUrls: ['./enterprise-culture-more.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EnterpriseCultureMoreComponent implements OnInit, AfterViewInit {
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  isSpinning = true;
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: true,
  };
  imgList: GALLERY_IMAGE[] = [
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238442295.jpg", title: '手动设置开才行' },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238482434.jpg", title: '萨瓦迪卡第几考场破'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238441116.jpg", title: '多长时间的'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238481823.jpg", title: '代发流水地房产局'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238481151.jpg", title: '都是分开林俊杰覅传递'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238478552.jpg", title: '文档了选择框vc'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238440877.jpg", title: '导出的看了就dxz'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238476262.jpg", title: '成飞集成发'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238475659.jpg", title: '是导出珠江新城'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238473837.jpg", title: '加肥加大'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238468158.jpg", title: '的才是正常想'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238436772.jpg", title: '副书记大货车'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238472379.jpg", title: '上传的交互层'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238471059.jpg", title: '看的出继续测'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238469767.jpg", title: '局机械厂长时间俺弟弟到处跑'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238468305.jpg", title: '首次加载新疆昌吉哦度下次'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238468133.jpg", title: '除夕快乐苍井空跑车'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238464288.jpg", title: '但是从PVC我怕vsz'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238462712.jpg", title: '隧道口将服从'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238448057.jpg", title: '看懂IPO佛山'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238442295.jpg", title: '手动设置开才行' },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238482434.jpg", title: '萨瓦迪卡第几考场破'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238441116.jpg", title: '多长时间的'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238481823.jpg", title: '代发流水地房产局'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238481151.jpg", title: '都是分开林俊杰覅传递'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238478552.jpg", title: '文档了选择框vc'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238440877.jpg", title: '导出的看了就dxz'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238476262.jpg", title: '成飞集成发'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238475659.jpg", title: '是导出珠江新城'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238473837.jpg", title: '加肥加大'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238468158.jpg", title: '的才是正常想'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238436772.jpg", title: '副书记大货车'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238472379.jpg", title: '上传的交互层'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238471059.jpg", title: '看的出继续测'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238469767.jpg", title: '局机械厂长时间俺弟弟到处跑'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238468305.jpg", title: '首次加载新疆昌吉哦度下次'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238468133.jpg", title: '除夕快乐苍井空跑车'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238464288.jpg", title: '但是从PVC我怕vsz'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238462712.jpg", title: '隧道口将服从'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238448057.jpg", title: '看懂IPO佛山'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238442295.jpg", title: '手动设置开才行' },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238482434.jpg", title: '萨瓦迪卡第几考场破'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238441116.jpg", title: '多长时间的'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238481823.jpg", title: '代发流水地房产局'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238481151.jpg", title: '都是分开林俊杰覅传递'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238478552.jpg", title: '文档了选择框vc'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238440877.jpg", title: '导出的看了就dxz'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238476262.jpg", title: '成飞集成发'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238475659.jpg", title: '是导出珠江新城'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238473837.jpg", title: '加肥加大'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238468158.jpg", title: '的才是正常想'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238436772.jpg", title: '副书记大货车'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238472379.jpg", title: '上传的交互层'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238471059.jpg", title: '看的出继续测'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238469767.jpg", title: '局机械厂长时间俺弟弟到处跑'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238468305.jpg", title: '首次加载新疆昌吉哦度下次'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238468133.jpg", title: '除夕快乐苍井空跑车'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238464288.jpg", title: '但是从PVC我怕vsz'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238462712.jpg", title: '隧道口将服从'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238448057.jpg", title: '看懂IPO佛山'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238442295.jpg", title: '手动设置开才行' },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238482434.jpg", title: '萨瓦迪卡第几考场破'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238441116.jpg", title: '多长时间的'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238481823.jpg", title: '代发流水地房产局'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238481151.jpg", title: '都是分开林俊杰覅传递'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238478552.jpg", title: '文档了选择框vc'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238440877.jpg", title: '导出的看了就dxz'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238476262.jpg", title: '成飞集成发'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238475659.jpg", title: '是导出珠江新城'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238473837.jpg", title: '加肥加大'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238468158.jpg", title: '的才是正常想'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238436772.jpg", title: '副书记大货车'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238472379.jpg", title: '上传的交互层'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238471059.jpg", title: '看的出继续测'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238469767.jpg", title: '局机械厂长时间俺弟弟到处跑'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238468305.jpg", title: '首次加载新疆昌吉哦度下次'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238468133.jpg", title: '除夕快乐苍井空跑车'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238464288.jpg", title: '但是从PVC我怕vsz'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238462712.jpg", title: '隧道口将服从'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238448057.jpg", title: '看懂IPO佛山'  },
    { url: "https:\/\/hellorfimg.zcool.cn\/provider_image\/preview260\/2238448057.jpg", title: '看懂IPO佛山'  },
  ];

  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
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
}
