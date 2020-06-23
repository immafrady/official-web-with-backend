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
  positionType = 'common';
  rotateActive = false;
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    this.rotateActive = true;
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  recruitment = [{
    type: 'common',
    label: '公共事务部'
  },{
    type: 'marketCenter',
    label: '市场中心'
  }, {
    type: 'sellCenter',
    label: '销售中心'
  }, {
    type: 'finance',
    label: '财务类'
  }, {
    type: 'technology',
    label: '技术部'
  }, {
    type: 'product',
    label: '产品部'
  }, {
    type: 'administration',
    label: '人力资源部'
  }, {
    type: 'service',
    label: '服务运营中心'
  }, {
    type: 'otherCompany',
    label: '子公司'
  }];

  positionData = {
    'common': [
      {
        id: 1,
        position: '高级税务经理',
        type: '公共事务部',
        address: '广州',
        date: '2020-06-18',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、负责研究财税政策的最新动态以及适用公司业务的重点税种和重点行业税收政策分析和解读。",
          "2、结合国家税收政策以及重点客户的行业政策进行解决方案设计和论证。",
          "3、配合销售和运营部门对于重点客户进行业务专业支持。",
          "4、针对公司业务和财税政策进行专项培训。",
          "任职资格：",
          "1、财税相关专业，本科以上学历",
          "2、财税咨询类或中大型企业财务经理及以上岗位，3年以上工作经验",
          "3、逻辑条理清晰，学习能力强 ，沟通协调能力强",
          "4、良好的文案编撰能力，熟练使用办公软件"
        ]
      }
    ],
    'marketCenter': [
      {
        id: 1,
        position: '高级文案',
        type: '市场中心',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、协助公司各类宣传策划方案的编辑和撰写，在文字层面把控表达；",
          "2、负责公司产品的整体文案策划、包装描述、卖点提炼；",
          "3、负责宣传推广文案及宣传资料文案的撰写，不限于自媒体（微博、微信、头条、搜狐、百家等）、PR稿件等；",
          "4、深入研究需求，负责项目开发各阶段的文案策划，协同项目部完成各类策划案和推广方案；",
          "5、具有良好的沟通协调、计划、文字处理能力，能够把握项目进程与流程控制；",
          "任职要求:",
          "1、能独立完成项目整体的产品文案描述、创意文案策划、品牌推广表达、各类稿件（新闻稿、综述稿、专访稿等）等专业文案；",
          "2、熟悉品牌推广及维护，具备独立完成项目能力，知识面广，有较高的文字审美鉴赏能力；",
          "3、熟悉营销创作流程，有敏锐的创作嗅觉和精准的创意表现力，具备独立思考和分析能力，对问题有自己独特的见解；",
          "4、个性开朗，善于交流；好学好问，责任心强；兴趣广泛，知识面广；",
          "5、具备较强的工作协调能力和良好的团队合作精神，工作严谨，文笔细腻，能承受工作压力；"
        ]
      },
      {
        id: 2,
        position: '高级营销策划专员',
        type: '市场中心',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、策划和执行市场营销方案，包括并不限于线上及线下相关营销推广活动；",
          "2、结合热点策划一系列事件，形成粉丝文化和影响力；",
          "3、进行市场调研与分析，研究竞品、行业发展状况，定期进行市场预测及情报分析；",
          "4、内外协调，推进项目落地执行。",
          "职位要求：",
          "1、关注和了解前沿营销动态和方法，营销、广告学等相关专业毕业；",
          "2、熟悉新媒体，熟练掌握社会化营销（如：微博营销、微信营销）；",
          "3、对营销策划有自我见解，对热门品牌有自我感知；",
          "4、参与或独立完成成功的品牌营销策划案例经验；",
          "5、好有国内/国际4A公司工作经验优先；",
          "6、三年以上工作经验。"
        ]
      }
    ],
    'sellCenter': [
      {
        id: 1,
        position: 'KA大客户销售',
        type: '销售中心',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、负责公司薪税解决方案在关键行业或区域的客户资源挖掘及营销拓展；",
          "2、独立完成企业端大客户开发、商务谈判等工作，建立稳定的客户关系；",
          "3、关注客户的合作情况和问题解决，挖掘、引导及满足客户的潜在需求；",
          "4、进行科学化客户管理与分析，充分挖掘客户辐射的资源及潜力；",
          "5，承担个人业绩指标，完成岗位量化考核标准；",
          "6、定期总结和复盘，提出针对性、合理化建议。",
          "任职资格：:",
          "1、专科以上学历；",
          "2、具有to B大客户销售经验，有细分行业资源、有saas销售经验、有同行业经验者优先考虑；",
          "3、善于沟通，有较强的说服能力及谈判技巧，具备较强的市场开拓能力；",
          "4、具备较强的团队协作意识，以及较强的资源协调能力。"
        ]
      },
      {
        id: 2,
        position: '销售中心vp',
        type: '销售中心',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、全面负责销售中心年度销售指标的达成；",
          "2、负责销售中心市场策略、价格策略、销售策略、人才策略等方向的把控及落地。",
          "3、整合公司内外资源，站在市场和客户视角，调整销售中心业务方向。",
          "4、负责销售中心团队的组建、日常管理、培训、辅导和团队激励，亲自负责重大客户的公关。",
          "任职要求：",
          "1、本科及以上学历，10年以上B端直销和渠道销售管理经验；",
          "2、对互联网、SaaS软件行业的解决方案销售、标准产品销售都有深刻理解，能独立设计解决方案",
          "3、熟悉各种销售策略及落地方法，优秀的互联网思维及创新意识。",
          "4、优秀的团队管理经验、人格魅力及责任心，目标感强、擅于整合资源，有财税行业背景或阿里系销售管理背景优先"
        ]
      },
      {
        id: 3,
        position: '销售总监（上海、杭州、深圳）',
        type: '销售中心',
        address: '上海、杭州、深圳',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、根据公司年度战略及市场销售目标，制订制定各阶段销售计划、销售目标并组织实施、完成；",
          "2、对销售项目进行整体分析、监控，定期形成书面报告，并适时调整营销策略；",
          "3、销售团队的建立和发展。对下属销售人员进行培训，提升顾问式销售技巧，谈判能力，增强销售团队的凝聚力；",
          "4、负责业务推动相关激励方案的策划及撰写，并宣导、落实和追踪反馈。",
          "5、理解并贯彻公司的企业文化，富有激情和正能量，有能力影响团队成员积极向上；",
          "任职要求：",
          "1、本科及以上，28~35岁；",
          "2、销售经验3年以上，销售管理经验2年以上，过往管理的团队业绩突出；",
          "3、有行业头部大客户销售管理经验优先，有互联网营销管理经验优先",
          "4、擅长销售团队的建设和管理，有高度的责任心，具有较强的管理能力、判断力和决策能力。"
        ]
      },
    ],
    'finance': [
      {
        id: 1,
        position: '财务总监',
        type: '财务部',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、根据公司战略目标，制定公司财务目标和政策；主持财务管理及公司内部控制工作，向总经理报告；",
          "2、对公司的经营目标进行财务描述，搭建整体经营管理体系及内部流程，为经营管理决策提供依据，并定期通过公司内控体系评估公司的经营风险，采用有效的措施予以防范；",
          "3、协调前后端价值链各环节及各利益相关方，推进战略目标的落地实施，降低经营管理成本，保证信息通畅，提高工作效率；",
          "4、协调公司同银行、工商、税务、统计、审计等政府部门的关系，维护组织利益；",
          "5、建立健全该公司财务组织结构，设置岗位，明确职责，保障财务会计信息质量，确保公司财务体系及经营管理体系的高效运转；",
          "6、审核财务报表，提交财务分析和管理工作报告; 参与投资项目的分析、论证和决策; 跟踪分析各种财务指标，揭示潜在的经营问题并提交管理层作决策参考；",
          "7、根据公司年度战略目标，组织并具体推动公司年度经营/预算计划程序；",
          "8、根据公司实际经营状况，制定有效的资金管理策略及计划；",
          "9、完成董事会、总经理交办的其他工作。",
          "任职条件：:",
          "1、财务、会计专业本科及以上学历；拥有会计师资格证书; 擅长数据分析、财务分析、经营管理分析；",
          "2、熟知国家财经法律法规政策，熟练操作财务软件; 具备良好的财务管理意识，熟知财务管理方式；",
          "3、具有5年以上财务管理工作经验; 有较强的财务分析预测、业务分析及风险防范能力；",
          "4、具备敏锐的洞察力和数据感觉，熟悉财务计划、成本分析、预算、成本核算等财务管理流程；",
          "5、有财务成本控制及资金管理的实践工作经验和技巧；",
          "6、善于使用人才和培养人才，具备出色的管理能力与良好的团队合作精神和沟通技巧；",
          "7、具有良好的职业道德、严谨的工作作风以及高度的事业心和责任感。"
        ]
      },
      {
        id: 2,
        position: '财务经理',
        type: '财务部',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、根据国家财务制度和财经法规，结合公司实际情况，配合制定并完善公司适用的财务管理制度；",
          "2、负责编制公司财务计划、费用预算和决算，有效地筹划和运用公司资金；",
          "3、负责编制公司各类财务报表、税务报表；",
          "4、对各项往来资金进行会计核算与账务处理，核对公司全盘账务；",
          "5、定期整理往来款项，清晰各类应收/应付款项的支付及申请节点及条件，并能采取有效措施提升公司资金利用率；",
          "6、负责税务申报及各项年末审计工作；",
          "7、负责账务凭证的审核及记账工作，并妥善保管会计凭证、账簿、报表及其他相关的档案资料；",
          "8、负责收集登记汇总各项成本数据资料，负责公司成本核算和成本管理，为公司发展决策提供参考依据；",
          "9、负责固定资产的会计明细核算工作，协助行政部定期对固定资产进行盘点、报废处理；",
          "10、完成领导交办的其它工作。",
          "任职要求：",
          "1、本科以上学历，财务、会计、金融等财会类相关专业，有注册会计师职称优先；",
          "2、8年以上财务管理工作经验；",
          "3、熟悉财务、税法等相关法律法规，熟悉财务类工作流程；",
          "4、电脑操作能力良好，熟悉各类财务软件的应用；",
          "5、良好的沟通协调能力和独立处理解决问题的能力，责任心强。",
          "6、税局各类检查和稽查经验。"
        ]
      },
      {
        id: 3,
        position: '全盘账会计',
        type: '财务部',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、负责一般纳税人全盘账务处理；",
          "2、负责账务凭证的审核及记账工作；",
          "3、负责妥善保管会计凭证、账簿、报表及其他相关的档案资料；",
          "4、完成领导交代的其它工作；",
          "任职要求：",
          "1、本科以上，会计及财务管理等相关专业，1年以上财务",
          "2、有较强的沟通能力和职业操守，做事认真仔细，抗压能力强。"
        ]
      },
    ],
    'technology': [
      {
        id: 1,
        position: 'JAVA开发工程师（应用研发）',
        type: '技术部',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "负责对应用系统开发实施，参与相关产品线的产品迭代开发，交付上线，并跟进解决上线过程中以及上线之后的各类系统问题。",
          "工作职责：",
          "1、参与需求讨论，设计高可用的实现方案，并能提出需求优化建议；",
          "2、参与项目代码开发，解决开发过程中出现的技术问题；",
          "3、负责优化已开发的功能代码；",
          "4、不定期开展技术讨论与分享；",
          "5、按照项目需求，根据技术规范输出设计文档。",
          "工作经验要求：",
          "1、统招本科以上学历，软件工程、计算机科学或相关专业，3年以上Java相关开发经验；",
          "2、有人力资源行业、大批量支付类业务场景、财税处理行业以及大型电商网站开发设计经验者优先；",
          "3、熟悉JAVA平台各类主流分布式开源架构；",
          "4、有扎实的JAVA基础和面向对象的编程思想，熟悉使用J2EE开发框架，对各种开源框架Spring、Spring",
          "5、精通设计原则，熟练使用设计模式，熟悉JVM工作原理，熟悉多线程、高并发技术；",
          "6、精通Oracle、MySql、SQL Server等至少一种数据库平台，熟练Tomcat、Jboss、WebLogic等WEB应用服务器；",
          "7、熟练掌握Redis、Maven、RabbitMQ等中间件，并对其原理有一定的了解；",
          "8、有Redis，NoSQLDB，Hadoop/Hive经验者优先，有高并发网站或者分布式系统开发经验者优先；",
          "9、熟练掌握Nginx/Apache/Tomcat/Jetty等服务，掌握shell脚本工具；",
          "10、具有良好的沟通协调能力、团队合作精神，敢于面对和承受各种技术难题及工作压力。"
        ]
      },
      {
        id: 2,
        position: '生产运维高级经理',
        type: '技术部',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "作为DevOps团队负责人，负责管理公司所有应用系统和阿里云平台基础架构的生产运维。",
          "1、领导DevOps团队，负责生产系统运维管理和阿里云平台的基础架构运维管理，确保生产系统的稳定运行；",
          "2、执行CTO战略规划，推动和建立生产运维体系，实现标准化运维体系；",
          "3、领导测试环境和预生产环境的应用项目开发支持；",
          "4、负责生产事故管理，服务管理，问题管理以及发布管理；",
          "5、负责生产系统的持续改进，领导诊断和修复根本性问题；",
          "6、负责管理用户期望以及沟通理解用户需求。",
          "任职要求：",
          "1、计算机科学或相关专业本科以上学历（全日制统招）",
          "2、8年以上工作经验，其中至少5年以上开发或者运维管理经验，3年以上运维团队管理经验。",
          "3、精通ITIL, SDLC管理流程，以及DevOps理念；",
          "4、有较强的团队管理能力，精通各类管理技能；",
          "5、有较强的逻辑思维能力，具备良好的解决问题的能力，良好的团队合作精神，敢于面对和承受各种技术难题及工作压力",
          "6、熟悉阿里云平台各类基础架构运维技术；",
          "7、熟悉JAVA平台各类主流开发技术及应用系统运维技术；",
          "8、熟悉各类主流数据库技术；",
          "9、熟悉linux/Windows操作系统服务器；",
          "10、熟悉中间件监控以及利用监控产品进行中间件的性能分析；",
          "11、了解分布式系统及微服务架构的运维，了解Docker技术，有一定的实施经验优先。"
        ]
      },
      {
        id: 3,
        position: '产品经理-技术部',
        type: '技术部',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、负责公司发佣、工商税务等相关产品的探索和设计；",
          "2、协同团队一起设计toC方向产品；",
          "3、负责市场调研、竞品分析、版本规划等相关工作；",
          "4、编写需求规格说明书、原型，PPT等产品相关文档；",
          "5、与设计、开发、测试等团队合作，不断迭代优化产品；",
          "任职要求：",
          "1、本科及以上学历，2年以上产品经验，有成功C端产品案例优先；",
          "2、热爱产品经理本职工作，具有好奇心，创新能力强，有财税或支付行业经验；",
          "3、有较强的沟通协调能力；",
          "4、积极主动，抗压能力强；",
          "5、持续学习，善于归纳总结，乐于分享。"
        ]
      },
    ],
    'product': [
      {
        id: 1,
        position: '产品专家',
        type: '产品部',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、洞察客户需求，及时掌握公司系列产品的市场销售情况，分析、判断各产品的生命周期及后续的跟进措施；",
          "2、对市场上其他产品的发展情况进行跟踪，结合公司现状及发展需要，准确寻找市场切入点，为产品研发部门提供开发方向，制定公司产品下一步的定位及运作策略；",
          "3、提交新产品进入市场的切入点、前期准备工作、运作过程及注意事项等具体实操方案；",
          "4、完成新产品营销方案：预先评估前期对产品的开发方向定位→产品的研发→申报、审批过程→产品上市准备→产品导入期→产品成长期→产品成熟期→产品衰退期等全周期跟进。",
          "5、建立公司产品资料库，对各类产品的主要品牌进行跟踪分析：如产品定位、宣传策略、分销渠道等。",
          "6、及时掌握行业动态，与产品开发部门紧密配合。",
          "任职要求:",
          "1、本科及以上学历，5年以上产品经验、熟悉个税、社保或薪资类产品的优先；",
          "2、熟悉互联网产品的设计、规划、管理、运营流程；能够输出高质量的产品原型和需求文档；",
          "3、具备互联网、移动互联网产品的管理能力与策划能力，熟知互联网或软件产品整体实现过程，包括从需求设计到产品发布和持续改进，精通用户体验，具备一定的产品运营能力；",
          "4、有较丰富的产品规划方案编写经验，思维敏捷，富有创新精神，对数据变化敏感，具备良好的分析判断能力；",
          "5、良好的沟通协调技巧和团队合作意识，善于跨部门组织、沟通和协调资源，具有分析解决问题的能力与执行力；",
          "6、熟悉财务、税务业务优先，有较深入个人所得税相关产品经验的优先。"
        ]
      },
      {
        id: 2,
        position: '产品经理-产品部',
        type: '产品部',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "职责描述：",
          "1、负责结算申报类产品的规划和设计；",
          "2、负责研究行业竞品动态，持续产品的迭代更新，提升产品用户满意度。",
          "3、洞悉用户需求，进行业务分析，充分结合现有产品，分析问题并提出创新解决方案",
          "4、负责具体功能的设计，并协调/推动研发团队按时完成产品开发、高质量上线；",
          "5、在项目推进过程中的主动进行跨部门沟通，能灵活调度各种资源以确保产品与平台顺利发展；",
          "任职要求：",
          "1、大学本科及以上学历，理工科优先考虑，具备3年及以上产品工作经验，有B端产品及主导0-1的产品设计经验，设计的产品有一定的用户量；",
          "2、了解支付结算逻辑，有相关资金风控及评分模型设计经验优先；",
          "3、有较好的行业敏感度和需求整理能力，熟悉产品运营体系，较强的产品规划能力，熟悉产品调研、规划、设计、开发、产品化以及产品上线等各环节；",
          "4、较强的抗压能力，细心负责有耐心，能让产品目标实施落地；",
          "5、敏锐的产品意识，良好的用户需求分析能力、挖掘能力，能结合公司业务发展及时优化，迭代；",
          "6、有优秀的的沟通能力，较强的逻辑思维及结构化思维能力，团队协调能力及组织协调能力；"
        ]
      }
    ],
    'administration': [
      {
        id: 1,
        position: 'HRG',
        type: '人力资源部',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、基于对公司战略与业务模式的深刻理解，参与所在部门管理工作；澄清业务发展规划与业务目标，明晰业绩目标实现关键路径与举措，并组织制定、审核各小组团队、员工绩效目标；",
          "2、为公司提供全方位HR管理支持，快速理解业务，担任可信赖、战略意义的伙伴角色，深入了解当前业务痛点与人员发展状况，提出HR解决方案并推动实施，持续推动组织效率的提升；",
          "3、协助业务进行招聘工作，帮助业务部门甄选人才。合理规划和有效配置人力资源，提升人均效能；盘点、识别关键人才，推动员工培养与职业发展管理；建立外部人才地图，参与公司雇主形象建设，高效、精准引进人才；",
          "4、关注员工思想动向，推动沟通体系和组织氛围建设，传承和强化公司文化价值观，激发员工队伍活力，确保公司文化价值观的落地。",
          "5、按照项目需求，根据技术规范输出设计文档。",
          "任职要求：",
          "1、本科及其以上学历，1年以上HRBP和HRG的经验；",
          "2、有业务视角，深刻理解政委相关工作，同等岗位经验优先考虑；",
          "3、对组织架构变革、绩效考核、人才梯队建设等方面至少有一项成功操作经验；",
          "4、优秀的业务洞察力、人际理解力、沟通协调能力、多任务多角色平衡能力，善于整合资源驱动目标达成；",
          "5、抗压能力强，勇于接受挑战和拥抱变化；"
        ]
      },
      {
        id: 2,
        position: 'OD',
        type: '人力资源部',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、结合公司战略，分析适合业务的组织模式、人员结构、人员配置及考核激励模式，评估组织架构有效性，为组织效能优化提供决策建议；",
          "2、根据公司发展战略及人力资源整体规划，盘点人才结构，完善公司的组织发展体系框架并推动落实；",
          "3、负责组织发展及干部管理体系相关的机制、流程、工具的完善和优化，如管理干部的选拔、评估、任免、盘点等；",
          "4、制定公司定岗定编方案，设计各部门岗位的能力素质模型",
          "5、参与公司关键岗位人才的胜任力模型建设、人才梯队建设，制定继任计划方案等；",
          "6、协助组织召开年度、季度、月度绩效达成分析会，推动组织能力、组织绩效持续提升。",
          "岗位要求：",
          "1、统招本科及以上学历，3-5年及以上相关经验；",
          "2、熟悉组织发展，有咨询公司或互联网行业组织设计、优化以及组织诊断类的项目实施负责人经验优先；",
          "3、善于思考分析，系统思维和业务视角能力突出；",
          "4、具备良好的布局规划能力，并能推动项目落地实践；",
          "5、具备优秀的组织和业务理解能力，擅长沟通影响及组织协调。"
        ]
      },
      {
        id: 3,
        position: '高级招聘专员',
        type: '人力资源部',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、根据公司的招聘需求，组织实施招聘活动并完成招聘目标；",
          "2、有效地维护招聘渠道，优化改进招聘流程，提高招聘效率；",
          "3、跟踪及分析人员入职、留存的情况，以便对招聘活动进行有效的评估；",
          "4、负责整个招聘进程、跟踪面试结果，和候选人洽谈，跟踪入职；",
          "5、做好员工转正前的日常管理维系工作，协助处理其他相关工作；",
          "任职要求：",
          "1、本科以上学历，人力资源相关专业优先，2年以上招聘相关工作经验；",
          "2、熟悉人力资源管理操作基本流程，了解国家劳动人事法规政策；",
          "3、具有良好的职业道德，踏实稳重，工作细心，责任心强，有较强的沟通、协调能力，有团队协作精神。"
        ]
      },
    ],
    'service': [
      {
        id: 1,
        position: '项目经理',
        type: '服务运营中心',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、负责协助销售拜访公司客户进行软件产品介绍、应用系统演示、方案技术交流；收集需求帮助用户提供解决方案；",
          "2、负责完成售前方案沟通会议的组织、方案文档的准备，提供项目售前技术支撑，在技术部以及销售的指导下参与完成相关技术方案的撰写、讲解及用户答疑等工作；",
          "3、负责项目计划的制定、跟踪和质量控制，及时发现并跟踪解决项目问题，有效控制项目风险，确保项目按计划完成；",
          "任职资格：",
          "1、本科及以上学历，1~5年SaaS行业同岗工作经验，具有人力资源行业、薪税行业工作经验优先；",
          "2、有较强的语言表达能力和沟通能力，擅长与客户沟通，可以清晰的给客户传达产品的功能和亮点，能够分析评估客户需求并提供解决方案；",
          "3、有良好文字表达能力，丰富的办公软件技能，熟练编写项目方案；",
          "4、工作条理性强，有一定的抗压能力，具有很强的责任心和团队合作精神；"
        ]
      },
      {
        id: 2,
        position: '客户服务专员',
        type: '服务运营中心',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、熟练掌握产品应用及操作，负责客户培训，辅导客户规范和高效的使用系统，完成产品交付，主动为客户答疑解惑，了解客户需求，服务客户；",
          "2、解答客户问题（支付、税务方面）、系统订单问题和紧急事务响应工作，并按时效反馈服务结果；",
          "3、能针对运维问题、工作流程进行归纳总结，不断的反馈，提出改进、优化建议；",
          "4、日常交易数据的统计、核对工作，协助提供数据分析等；",
          "任职资格：",
          "1、普通话标准，声音甜美，具有较强的条理性和抗压能力，有较强的沟通协调能力，工作细致负责，熟练使用OFFICE软件；",
          "2、统招本科财税、会计、金融、市场营销、广告、新闻传播、公共关系等相关专业；",
          "3、有1年以上客户服务工作经验或互联网、电子商务客服行业投诉处理经验优先考虑，具备较强的投诉处理能力者优先；",
          "4、服务意识强，注重细节，执行力强，有极好的全局观；",
          "5、具备优秀的数据统计、分析能力，善于通过数据分析发现问题并解决问题。"
        ]
      },
      {
        id: 3,
        position: '税务会计主管',
        type: '服务运营中心',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、负责为客户办理工商开户注册、网上报税、账务核对等的财税服务；",
          "2、负责为客户提供专业的税务申报等咨询服务；",
          "3、负责与财务部门资料的对接，与团队合作完成税务申报和对账工作；",
          "4、负责客户档案资料、文件等的规范管理；",
          "5、完成上级交办的其他财税事项。",
          "任职要求：",
          "1、本科及以上学历，财务类相关专业，熟练Excel函数操作，熟练使用财务办公软件，如经验合适可降低大专学历；",
          "2、5年及以上会计经验，熟悉开票报税、工商办理等相关业务知识；熟悉国家政策，统筹各地园区税务政策；",
          "3、3年以上团队管理经验，具备良好的团队管理能力及团队规划能力；",
          "4、有强烈的时间观念、做事有规划，思维敏捷，有良好沟通能力和团队合作精神；",
          "5、有良好的服务意识，维护与客户的良好合作关系。",
          "6、有会计师事务所工作经验者优先"
        ]
      },{
        id: 3,
        position: '会计专员 广州',
        type: '服务运营中心',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、负责为客户办理工商开户注册、网上报税、账务核对等的财税服务；",
          "2、负责为客户提供专业的税务申报等咨询服务；",
          "3、负责与财务部门资料的对接，与团队合作完成税务申报和对账工作；",
          "4、负责客户档案资料、文件等的规范管理；",
          "5、完成上级交办的其他财税事项。",
          "任职要求：",
          "1、本科及以上学历，财务类相关专业，熟练Excel函数操作，熟练使用财务办公软件；",
          "2、一年及以上开票报税经验，熟悉开票报税、工商办理等相关业务知识；",
          "3、有强烈的时间观念、做事有规划，思维敏捷，有良好沟通能力和团队合作精神；",
          "4、有良好的服务意识，维护与客户的良好合作关系。"
        ]
      }
    ],
    'otherCompany': [
      {
        id: 1,
        position: '会计/税务专员 海南',
        type: '海南子公司',
        address: '广州',
        date: '2020-06-12',
        impatient: false,
        new: false,
        expand: false,
        description: [
          "岗位职责：",
          "1、在了解开票报税相关业务知识的基础上，为客户提供专业的咨询服务；",
          "2、主要工作内容包含并不限于办理工商开户注册、网上报税等；",
          "3、负责与财务部门资料的对接以及客户维护；",
          "4、进行客户档案资料、文件等的规范管理。",
          "任职资格：",
          "1、本科及以上学历，1年及以上开票报税经验，熟练使用基础办公软件，有能力者学历可放低至大专；",
          "2、对工商办理有一定的了解、有强烈的时间观念、做事有规划；",
          "3、有良好的服务意识，维护与客户的良好合作关系；",
          "4、思维敏捷，有良好沟通能力和团队合作精神；"
        ]
      }
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
