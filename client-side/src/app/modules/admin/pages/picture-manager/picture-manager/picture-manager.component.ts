import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { httpParamsHandler } from "@/utils/httpParamsHandler";
import { PictureManagerService } from "@admin/pages/picture-manager/picture-manager.service";
import { IPictureEntity } from "@libs/entity/picture";
import {GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent} from "@web-aid-kit/ngx-image-gallery";

@Component({
  selector: 'admin-picture-manager',
  templateUrl: './picture-manager.component.html',
  styleUrls: ['./picture-manager.component.scss']
})
export class PictureManagerComponent implements OnInit {
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  pictureList: IPictureEntity[];
  total: number;
  checked = false;
  setOfCheckedId = new Set<number>();
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: true,
  };
  imgList: GALLERY_IMAGE[] = [];
  constructor(private pictureManagerService: PictureManagerService) { }

  openGallery(url, title, index: number = 0) {
    this.imgList = [{ url, title }];
    setTimeout(() => {
      this.ngxImageGallery.open();
    }, 0)
  }
  ngOnInit(): void {
    this.getPictureList();
  }

  /**
   * @description 获取图片列表
   */
  getPictureList() {
    this.pictureManagerService.getPictureList().subscribe(res => {
      this.total = res.data.total;
      this.pictureList = res.data.list
    })
  }

  /**
   * @description 批量删除图片
   * @param ids
   */
  deletePictures(ids) {
    this.pictureManagerService.deletePictures({
      ids
    }).subscribe(() => {
      this.getPictureList()
    })
  }

  /**
   * @description 删除单张图片
   * @param id
   */
  deleteOnePicture(id) {
    this.deletePictures([id])
  }
}
