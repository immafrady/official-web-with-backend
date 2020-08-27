import {Component, OnInit, ViewChild} from '@angular/core';
import { PictureManagerService } from "@admin/pages/picture-manager/picture-manager.service";
import {GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent} from "@web-aid-kit/ngx-image-gallery";
import {IJobDepartmentEditOptions} from "@libs/request/job";
import {PictureType, PictureTypeLabel} from "@libs/enums/picture";

@Component({
  selector: 'admin-picture-manager',
  templateUrl: './picture-manager.component.html',
  styleUrls: ['./picture-manager.component.scss']
})
export class PictureManagerComponent implements OnInit {
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  editCache: { [key: string]: { edit: boolean; data: IJobDepartmentEditOptions } } = {};
  pictureList = [];
  total: number;
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: true
  };
  imgList: GALLERY_IMAGE[] = [];
  listOfFilter = [{
    value: PictureType.Environment,
    text: PictureTypeLabel[PictureType.Environment]
  }, {
    value: PictureType.Friend,
    text: PictureTypeLabel[PictureType.Friend]
  }, {
    value: PictureType.Honor,
    text: PictureTypeLabel[PictureType.Honor]
  }, {
    value: PictureType.Patent,
    text: PictureTypeLabel[PictureType.Patent]
  }];

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

  // 搜索列表
  filterList(e): void {
    if (e) {
      this.getPictureList(e)
    }
  }

  /**
   * @description 获取图片列表
   */
  getPictureList(type?): void {
    this.pictureManagerService.getPictureList({ type }).subscribe(res => {
      this.total = res.data.total;
      this.pictureList = res.data.list;
      this.pictureList.forEach(item => {
        this.editCache[item.id] = {
          edit: false,
          data: { ...item }
        };
      });
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
    });
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

  editSort(id: string, judge: boolean): void {
    this.editCache[id].edit = judge;
  }

  saveEditSort(id): void {
    this.pictureManagerService.updatePictureSort(id,{ sort: this.editCache[id].data.sort}).subscribe(() => {
      const index = this.pictureList.findIndex(item => item.id === id);
      Object.assign(this.pictureList[index], this.editCache[id].data);
      this.editSort(id, false)
    })
  }
}
