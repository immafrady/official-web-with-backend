import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from '@/app/shared/base-page.component';
import { BASE_64_IMG } from "src/config/images";

interface IDateDictionary {
  [key: string]: { time: string, content: string }[]
}

@Component({
  selector: 'pc-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent extends BasePageComponent implements OnInit {
  base64Pics = BASE_64_IMG;
  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  dateList:Array<any> = [{
    year: '2016',
    title: '探索'
  }, {
    year: '2017',
    title: '践行'
  }, {
    year: '2018',
    title: '成长'
  }, {
    year: '2019',
    title: '飞跃'
  }, {
    year: '2020',
    title: '引领'}];
  dateDictionary: IDateDictionary = {
    '2016': [
      { time: '12月', content: '率先推出自由职业者发薪报税经营模式，引领行业探索新经济商税服务未来' }
    ],
    '2017': [
      { time: '2月', content: '业内领先推出“佣金宝”企业发佣报税智能结算系统，上线首月服务流水破1亿' },
      { time: '6月', content: '“创客宝”产品上线，完成第一家个体工作室开户' },
      { time: '7月', content: '薪宝信息科技（广州）有限公司成立' },
      { time: '12月', content: '薪宝科技全年服务流水突破10亿' }
    ],
    '2018': [
      { time: '12月', content: '薪宝科技服务共享经济企业客户超过50家，全年服务流水破40亿元人民币，“佣金宝”、“创客宝”产品深受客户好评' }
    ],
    '2019': [
      { time: '1月', content: '获猎聘网2000万战略投资' },
      { time: '2月', content: '薪宝科技“薪码力”项目正式启动，致力于探索商税技术未来' },
      { time: '6月', content: '薪宝科技CEO刘树兵，荣获广东省人力资源研究会“新锐企业家”称号' },
      { time: '8月', content: '薪宝科技当选“广东省人力资源研究会副会长单位”' },
      { time: '9月', content: '荣获“2019中国十大影响力人力资源品牌奖”' },
      { time: '9月', content: '荣获“2019中国人力资源科技创新产品奖”' },
      { time: '10月', content: '荣获“2019数字人力资源科技人气奖”' },
      { time: '10月', content: '广东财经大学实践教学基地项目启动' },
      { time: '11月', content: '荣获“2019中国财经峰会冬季论坛-2019年度最具投资价值奖”' },
      { time: '11月', content: '薪宝科技CEO刘树兵荣获“2019中国人力资源科技影响力TOP人物”' },
      { time: '12月', content: '薪宝科技“薪研院”项目正式启动，致力于探索自然人商税服务未来' },
      { time: '12月', content: '荣获“2019中国人力资源先锋服务机构——年度最佳薪税服务平台奖”' }
    ],
    '2020': [
      { time: '1月', content: '薪宝科技将园区体系升级为“薪商小镇”，致力于打造一站式智慧商事服务生态圈' },
      { time: '2月', content: '承担社会责任抗击疫情，薪宝科技向湖北及安徽两地捐赠了总价值达23万元的生活物资及防疫用品' },
      { time: '3月', content: '荣获“2019年度中国华南地区人力资源创先争优金人奖”' },
      { time: '4月', content: '荣获“HRoot大中华地区最佳人力资源服务品牌”' },
      { time: '4月', content: '当选“广州电子商务行业协会副会长单位”' },
      { time: '4月', content: '“口袋工作室”个人商税综合服务平台上线' },
      { time: '5月', content: '荣获“2020中国人力资源服务机构100强”' },
      { time: '疫情期间', content: '薪宝科技逆势而上，累计服务企业客户超过500家，涵盖100+互联网各领域头部平台，累计服务自由职业者超过2000万人次，正以行业领导者姿态继续探索新经济商税服务未来…' },
      { time: '7月', content: '薪宝科技CEO刘树兵，成功登榜中国人力资源行业青年企业家' },
    ]
  };
  active:string = '2020';

  ngOnInit(): void {
  }
  selectTab(active, arrow?: string): void {
    if (arrow) {
      let position = null;
      this.dateList.forEach((item, index) => {
        if (item.year === active) {
          position = index
        }
      });
      if (arrow === 'left') {
        position--;
        if (position >= 0) {
          this.active = this.dateList[position].year;
        }
      } else if (arrow === 'right') {
        position++;
        if (position < this.dateList.length) {
          this.active = this.dateList[position].year
        }
      }
    } else {
      this.active = active;
    }
  }
}
