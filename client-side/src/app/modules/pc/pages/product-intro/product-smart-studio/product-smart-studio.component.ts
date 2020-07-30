import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {getImage} from "@/utils/getImage";

@Component({
  selector: 'pc-product-smart-studio',
  templateUrl: './product-smart-studio.component.html',
  styleUrls: ['./product-smart-studio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductSmartStudioComponent implements OnInit {
  getImage = getImage;
  technicalAdvantage = <any>[{
    icon: getImage('product-advantage1'),
    advantage1: '操作便捷',
    advantage2: '法人无须到场，在线申领执照'
  },{
    icon: getImage('product-advantage2'),
    advantage1: '智能识别',
    advantage2: '人脸识别+签名，您的账户更安全'
  },{
    icon: getImage('product-advantage3'),
    advantage1: '安全高效',
    advantage2: '可开具增值税专票、普票，让您的业务更合规'
  },{
    icon: getImage('product-advantage4'),
    advantage1: '快速高效',
    advantage2: '支持企业系统API对接，批量开通及托管，企业合作更高效'
  },{
    icon: getImage('product-advantage5'),
    advantage1: '全国可用',
    advantage2: '无需租用办公场地，落户园区，执照全国通用'
  },{
    icon: getImage('product-advantage6'),
    advantage1: '好服务',
    advantage2: '专属客服，工商税务登记全程代办，省心安心更放心'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
