import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {COMPANY_INFO, GONG_XIN_BU_URL} from "src/config/resources";

@Component({
  selector: 'pc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  companyInfo = COMPANY_INFO;
  gongXinBuUrl = GONG_XIN_BU_URL;
  misc = [
    '网络文化经营许可证：粤网文（2016）1377-314 | 增值电信业务经营许可证: 粤B2-20070379 粤ICP备09210879号 | 网络出版许可证：（总）网出证（粤）字 031号 广播电视节目制作经营许可证：（粤）字第1099号 | 中华人民共和国互联网药品信息服务资格证：（粤）-非经营性-2016-0339 粤公网安备 44010602000142号',
    '穗公网监备案证第44010650010141号 违法和不良信息举报：0571-26883488 | ©2004-2019 薪宝信息科技（广州）有限公司 版权所有'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
