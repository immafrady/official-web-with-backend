import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {getImage} from "@/utils/getImage";

@Component({
  selector: 'pc-product-xinpayroll-manager',
  templateUrl: './product-xinpayroll-manager.component.html',
  styleUrls: ['./product-xinpayroll-manager.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductXinpayrollManagerComponent implements OnInit {
  getImage = getImage;
  constructor() {}
  technicalAdvantage = <any>[{
    icon: getImage('steward-technical1'),
    advantage1: '支持跨平台API对接， ',
    advantage2: '一键智能上传'
  },{
    icon: getImage('steward-technical2'),
    advantage1: '定制专属账户，',
    advantage2: '银行卡信息智能查询'
  },{
    icon: getImage('steward-technical3'),
    advantage1: '公安部三级等保，',
    advantage2: '国际标准加密算法，确保数据资金安全'
  },{
    icon: getImage('steward-technical4'),
    advantage1: 'T+0支付，银企直联系统，',
    advantage2: '佣金零停留，发放秒级到账'
  },{
    icon: getImage('steward-technical5'),
    advantage1: '支发佣支付零故障',
    advantage2: '系统可用性高达99.9%'
  },{
    icon: getImage('steward-technical6'),
    advantage1: '系统支付峰值承载',
    advantage2: '量单天超过1000万+笔'
  },{
    icon: getImage('steward-technical7'),
    advantage1: '批量实时支付技术，',
    advantage2: '支持24小时不间断佣金发放'
  },{
    icon: getImage('steward-technical8'),
    advantage1: '严格控制的外围防火墙，',
    advantage2: '入侵检测，主动日志监控，'
  }];

  ngOnInit(): void {
  }

}
