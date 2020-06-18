import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BasePageComponent} from "../../../../shared/base-page.component";
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {getImage} from "../../../../../utils/getImage";

@Component({
  selector: 'pc-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JoinUsComponent extends BasePageComponent implements OnInit {
  positionType = 'design';
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  recruitment = [{
    type: 'design',
    label: '设计类'
  }, {
    type: 'administration',
    label: '行政类'
  }, {
    type: 'personnel',
    label: '人事类'
  }, {
    type: 'finance',
    label: '财务类'
  }, {
    type: 'service',
    label: '客服类'
  }, {
    type: 'sell',
    label: '销售类'
  }, {
    type: 'technology',
    label: '技术类'
  }, {
    type: 'product',
    label: '产品类'
  }, {
    type: 'other',
    label: '其他'
  }];

  positionData = {
    'design': [
      {
        id: 1,
        position: '高级税务经理',
        type: '公共事务部',
        address: '广州',
        date: '2020-06-18',
        impatient: true,
        new: true,
        expand: false,
        description: [
          '岗位职责：',
          '1、负责研究财税政策的最新动态以及适用公司业务的重点税种和重点行业税收政策分析和解读。',
          '2、结合国家税收政策以及重点客户的行业政策进行解决方案设计和论证。',
          '3、配合销售和运营部门对于重点客户进行业务专业支持。',
          '4、针对公司业务和财税政策进行专项培训。',
          '岗位要求：',
          '1、具有5年以上无线端设计经验；',
          '2、拥有深厚的设计方法论与娴熟的设计表现能力及创新能力； ',
          '3、富有激情、关注细节、善于沟通，有良好团队合作能力；',
          '4、简历投递请附上具有代表性的相关设计作品；'
        ]
      }
    ],
    'administration': [
      {
        id: 1,
        position: '高级UI设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: true,
        new: true,
        expand: false,
        description: [
          '岗位职责：',
          '1、为公司新产品与新功能提供创意及设计方案；',
          '2、持续关注设计趋势，分享设计经验，提高团队的设计能力；',
          '3、参与前瞻性产品的创意体验设计；',
          '4、在UI设计和用户体验方面进行业界前沿探索和创新。',
          '岗位要求：',
          '1、具有5年以上无线端设计经验；',
          '2、拥有深厚的设计方法论与娴熟的设计表现能力及创新能力； ',
          '3、富有激情、关注细节、善于沟通，有良好团队合作能力；',
          '4、简历投递请附上具有代表性的相关设计作品；'
        ]
      },
      {
        id: 2,
        position: '资深设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
      {
        id: 3,
        position: '平面设计助理',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
    ],
    'personnel': [
      {
        id: 1,
        position: '高级UI设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: true,
        new: true,
        expand: false,
        description: [
          '岗位职责：',
          '1、为公司新产品与新功能提供创意及设计方案；',
          '2、持续关注设计趋势，分享设计经验，提高团队的设计能力；',
          '3、参与前瞻性产品的创意体验设计；',
          '4、在UI设计和用户体验方面进行业界前沿探索和创新。',
          '岗位要求：',
          '1、具有5年以上无线端设计经验；',
          '2、拥有深厚的设计方法论与娴熟的设计表现能力及创新能力； ',
          '3、富有激情、关注细节、善于沟通，有良好团队合作能力；',
          '4、简历投递请附上具有代表性的相关设计作品；'
        ]
      },
      {
        id: 2,
        position: '资深设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
      {
        id: 3,
        position: '平面设计助理',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
    ],
    'finance': [
      {
        id: 1,
        position: '高级UI设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: true,
        new: true,
        expand: false,
        description: [
          '岗位职责：',
          '1、为公司新产品与新功能提供创意及设计方案；',
          '2、持续关注设计趋势，分享设计经验，提高团队的设计能力；',
          '3、参与前瞻性产品的创意体验设计；',
          '4、在UI设计和用户体验方面进行业界前沿探索和创新。',
          '岗位要求：',
          '1、具有5年以上无线端设计经验；',
          '2、拥有深厚的设计方法论与娴熟的设计表现能力及创新能力； ',
          '3、富有激情、关注细节、善于沟通，有良好团队合作能力；',
          '4、简历投递请附上具有代表性的相关设计作品；'
        ]
      },
      {
        id: 2,
        position: '资深设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
      {
        id: 3,
        position: '平面设计助理',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
    ],
    'service': [
      {
        id: 1,
        position: '高级UI设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: true,
        new: true,
        expand: false,
        description: [
          '岗位职责：',
          '1、为公司新产品与新功能提供创意及设计方案；',
          '2、持续关注设计趋势，分享设计经验，提高团队的设计能力；',
          '3、参与前瞻性产品的创意体验设计；',
          '4、在UI设计和用户体验方面进行业界前沿探索和创新。',
          '岗位要求：',
          '1、具有5年以上无线端设计经验；',
          '2、拥有深厚的设计方法论与娴熟的设计表现能力及创新能力； ',
          '3、富有激情、关注细节、善于沟通，有良好团队合作能力；',
          '4、简历投递请附上具有代表性的相关设计作品；'
        ]
      },
      {
        id: 2,
        position: '资深设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
      {
        id: 3,
        position: '平面设计助理',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
    ],
    'sell': [
      {
        id: 1,
        position: '高级UI设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: true,
        new: true,
        expand: false,
        description: [
          '岗位职责：',
          '1、为公司新产品与新功能提供创意及设计方案；',
          '2、持续关注设计趋势，分享设计经验，提高团队的设计能力；',
          '3、参与前瞻性产品的创意体验设计；',
          '4、在UI设计和用户体验方面进行业界前沿探索和创新。',
          '岗位要求：',
          '1、具有5年以上无线端设计经验；',
          '2、拥有深厚的设计方法论与娴熟的设计表现能力及创新能力； ',
          '3、富有激情、关注细节、善于沟通，有良好团队合作能力；',
          '4、简历投递请附上具有代表性的相关设计作品；'
        ]
      },
      {
        id: 2,
        position: '资深设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
      {
        id: 3,
        position: '平面设计助理',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
    ],
    'technology': [
      {
        id: 1,
        position: '高级UI设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: true,
        new: true,
        expand: false,
        description: [
          '岗位职责：',
          '1、为公司新产品与新功能提供创意及设计方案；',
          '2、持续关注设计趋势，分享设计经验，提高团队的设计能力；',
          '3、参与前瞻性产品的创意体验设计；',
          '4、在UI设计和用户体验方面进行业界前沿探索和创新。',
          '岗位要求：',
          '1、具有5年以上无线端设计经验；',
          '2、拥有深厚的设计方法论与娴熟的设计表现能力及创新能力； ',
          '3、富有激情、关注细节、善于沟通，有良好团队合作能力；',
          '4、简历投递请附上具有代表性的相关设计作品；'
        ]
      },
      {
        id: 2,
        position: '资深设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
      {
        id: 3,
        position: '平面设计助理',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
    ],
    'product': [
      {
        id: 1,
        position: '高级UI设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: true,
        new: true,
        expand: false,
        description: [
          '岗位职责：',
          '1、为公司新产品与新功能提供创意及设计方案；',
          '2、持续关注设计趋势，分享设计经验，提高团队的设计能力；',
          '3、参与前瞻性产品的创意体验设计；',
          '4、在UI设计和用户体验方面进行业界前沿探索和创新。',
          '岗位要求：',
          '1、具有5年以上无线端设计经验；',
          '2、拥有深厚的设计方法论与娴熟的设计表现能力及创新能力； ',
          '3、富有激情、关注细节、善于沟通，有良好团队合作能力；',
          '4、简历投递请附上具有代表性的相关设计作品；'
        ]
      },
      {
        id: 2,
        position: '资深设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
      {
        id: 3,
        position: '平面设计助理',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
    ],
    'other': [
      {
        id: 1,
        position: '高级UI设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: true,
        new: true,
        expand: false,
        description: [
          '岗位职责：',
          '1、为公司新产品与新功能提供创意及设计方案；',
          '2、持续关注设计趋势，分享设计经验，提高团队的设计能力；',
          '3、参与前瞻性产品的创意体验设计；',
          '4、在UI设计和用户体验方面进行业界前沿探索和创新。',
          '岗位要求：',
          '1、具有5年以上无线端设计经验；',
          '2、拥有深厚的设计方法论与娴熟的设计表现能力及创新能力； ',
          '3、富有激情、关注细节、善于沟通，有良好团队合作能力；',
          '4、简历投递请附上具有代表性的相关设计作品；'
        ]
      },
      {
        id: 2,
        position: '资深设计师',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
      {
        id: 3,
        position: '平面设计助理',
        type: '设计类',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: true,
        expand: false,
        description: ['无']
      },
    ],
  };
  getImage = getImage;

  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  changeRecruitment(type):void {
    this.positionType = type
  }

  ngOnInit(): void {
  }

}
