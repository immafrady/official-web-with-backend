import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {COMPANY_INFO, GONG_XIN_BU_URL} from "src/config/resources";
import { getImage } from "src/utils/getImage";

@Component({
  selector: 'pc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  getImage = getImage;
  companyInfo = COMPANY_INFO;
  gongXinBuUrl = GONG_XIN_BU_URL;
  misc = [
    '薪宝信息科技（广州）有限公司有限公司 版权所有'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
