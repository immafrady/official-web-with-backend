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
  indeterminate = false;
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
  getPictureList(): void {
    this.pictureManagerService.getPictureList().subscribe(res => {
      this.total = res.data.total;
      this.pictureList = res.data.list;
    })
  }

  /**
   * @description 删除图片方法
   * @param ids
   */
  deletePictures(ids): void {
    this.pictureManagerService.deletePictures({
      ids
    }).subscribe(() => {
      ids.forEach(id => this.setOfCheckedId.delete(id));
      this.getPictureList();
      this.refreshCheckedStatus();
    })
  }

  /**
   * @description 删除单张图片
   * @param id
   */
  deleteOnePicture(id): void {
    this.deletePictures([id]);
  }

  /**
   * @description 批量删除图片
   */
  deleteSelectedPictures(): void {
    this.deletePictures([...this.setOfCheckedId]);
  }

  /**
   * @description 勾选全部
   * @param checked
   */
  onAllCheckChange(checked: boolean): void {
    this.pictureList.forEach(({ id }) => {
      this.updateCheckedSet(id, checked);
    })
    this.refreshCheckedStatus();
  }

  /**
   * @description 单挑勾选
   * @param id
   * @param checked
   */
  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  /**
   * @description 更新总按钮样式
   */
  refreshCheckedStatus(): void {
    this.checked = this.pictureList.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = this.pictureList.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }
}
