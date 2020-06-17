import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "../../../../shared/base-page.component";
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

  dateList:string[] = ['2017', '2018', '2019', '2020'];
  dateDictionary: IDateDictionary = {
    '2017': [
      { time: '7月', content: '薪宝科技在广州成立' },
      { time: '7月', content: '业内领先推出“薪税管家”商税服务系统，上线首月服务业务量破1亿' },
      { time: '7月', content: '“创客宝”产品上线，完成第一家个体口袋工作室开户' },
      { time: '8月', content: '广州华信人力并入薪宝科技大业务板块' },
      { time: '8月', content: '薪水管家平台年度服务业务量破10亿' },
    ],
    '2018': [
      { time: '7月', content: '举办社保改革与应对策略分享会（广州场）' },
      { time: '8月', content: '社保改革与应对策略分享会（深圳场）' },
      { time: '9月', content: '举办社保改革与应对策略私董会（广州）' },
      { time: '9月', content: '杭州分享会/线上课程分享会' },
      { time: '9月', content: '梁会长与董教授来我司参观指导' },
      { time: '10月', content: '祁东政府到我司参观指导' },
      { time: '10月', content: '社税新政下的组织重构与成本解决方案（中山场）' },
      { time: '10月', content: '社税新政下的组织重构与成本解决方案（广州场）' },
      { time: '10月', content: '薪宝集团注入新势力，周康康、万国文、刘康等同事加入薪宝' },
    ],
    '2019': [
      { time: '1月', content: '接受猎聘网两亿元天使轮战略投资' },
      { time: '4月', content: '薪宝科技加入《中国人力资源社会保障》理事会会员' },
      { time: '6月', content: '薪宝科技CEO荣获广东省人力资源研究会“新锐企业家”称号' },
      { time: '7月', content: '薪宝科技参加广州跨境电商博览会' },
      { time: '9月', content: '2019中国人力资源科技创新产品奖' },
      { time: '9月', content: '2019“中国最具影响力人力资源品牌奖”' },
      { time: '9月', content: '2019数字人力资源科技奖（人气奖）' },
      { time: '10月', content: '薪宝科技第一批员工到张家界团建' },
      { time: '11月', content: '薪宝科技CEO刘树兵上榜2019中国人力资源科技影响力TOP人物' },
      { time: '11月', content: '薪宝科技参加第二届社群团购联盟大会协议' },
      { time: '11月', content: '2019参与中国财经峰会冬季论坛，获年度最具投资价值奖' },
      { time: '11月', content: '薪宝科技参加湖北山林社电商展会' },
      { time: '11月', content: '2019GHR年度人气HR服务机构全国30强' },
      { time: '12月', content: '黄山市税务领导到我司参观指导' },
      { time: '12月', content: '广东财经大学财税学院来访，与薪宝建立广东财经大学实践教学基地' },
      { time: '12月', content: '2019中国先锋人力资源服务商—年度最佳薪税服务平台' }
    ],
    '2020': [
      { time: '2月', content: '为抗疫出力 薪宝科技向湖北安徽捐赠物资助力疫情防控' },
      { time: '3月', content: '2019年度中国华南地区人力资源创先争优（金人奖）' },
      { time: '4月', content: 'HRoot大中华地区最佳人力资源服务品牌（薪税服务类）' },
      { time: '5月', content: '2020中国人力资源服务机构100强 - TOP 61' },
      { time: '5月', content: '薪宝科技乔迁至力达广场' }
    ]
  };
  active:string = '2017';

  ngOnInit(): void {
  }
  selectTab(active, arrow?: string): void {
    this.active = active;
    let position = this.dateList.indexOf(active);
    if (arrow === 'left' && position > 0) {
      position--;
      this.active = this.dateList[position]
    } else if (arrow === 'right' && position < this.dateList.length - 1){
      position++;
      this.active = this.dateList[position]
    }
  }

}
