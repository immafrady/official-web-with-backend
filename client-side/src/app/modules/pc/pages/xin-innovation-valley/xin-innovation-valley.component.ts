import {Component, OnInit, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "../../../../shared/base-page.component";
import {getImage} from "../../../../../utils/getImage";
import Swiper from "swiper";

@Component({
  selector: 'pc-xin-innovation-valley',
  templateUrl: './xin-innovation-valley.component.html',
  styleUrls: ['./xin-innovation-valley.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class XinInnovationValleyComponent extends BasePageComponent implements OnInit, AfterViewInit {
  getImage = getImage;
  slides = [
    {
      title: '高并发处理',
      text: 'High Concurrent Processing',
      desc: '针对佣金发放系统海量用户批量实时支付的高并发研究'
    },
    {
      title: '高容错性',
      text: 'High Fault Tolerance',
      desc: '旨在提升系统的稳定能力确保指令顺利传达'
    },
    {
      title: '高可用性',
      text: 'High Availability',
      desc: '旨在提高负载均衡，周全满足客户及用户需求'
    },
    {
      title: '微服务架构',
      text: 'Microservice Architecture',
      desc: '旨在解决单体应用的复杂性，提升整体服务效能'
    },
    {
      title: 'DEVOPS',
      text: ' ',
      desc: '旨在提升系统的稳定能力确保指令顺利传达'
    },
    {
      title: 'AI应用',
      text: 'AI application',
      desc: '旨在打造智慧 商税“大脑”，降低企业成本，提升服务效能'
    },
    {
      title: '支付安全',
      text: 'Payment Security',
      desc: '针对批量实时支付系统的安全对接及安全防御研究'
    },
    {
      title: '区块链',
      text: 'Blockchain',
      bgClass: 'xin-innovation-vally-1',
      desc: '以“区块链发票”为代表的区块链商税应用研究'
    },
    {
      title: '5G应用',
      text: '5G application',
      desc: '以5G技术在商税管理、运营服务、商税物联网等场景的应用研究'
    },
    {
      title: '大数据',
      text: 'Big Data',
      desc: '针对海量数据的高效整理及价值提炼，及时解析故障、问题和缺陷根源，完善系统服务'
    }
  ];
  xinInnovationVallySwiper: Swiper;
  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  ngAfterViewInit() {
    this.xinInnovationVallySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: true,
      slidesPerView: 5,
      navigation: {// 如果需要前进后退按钮
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  ngOnInit(): void {
  }

}
