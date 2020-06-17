// 路由信息 基本构造
export interface IRouterInfo {
  name: string;
  title: string;
}

// 路由信息 data
export interface IRouterData {
  title: string;
  meta?: string;
}

/**
 * 路由枚举(网页端)
 */
export const enum WebRouterName {
  Home,
  AboutUs,
  NewsCenter,
  ProductIntro,
  XinAcademy,
  XinInnovationValley,
  XinTown,
  JoinUs
}

export function getWebRouterInfo(key: WebRouterName): IRouterInfo {
  const routerInfos = {
    [WebRouterName.Home]: <IRouterInfo>{
      name: '',
      title: '首页'
    },
    [WebRouterName.AboutUs]: <IRouterInfo>{
      name: 'about-us',
      title: '关于我们'
    },
    [WebRouterName.NewsCenter]: <IRouterInfo>{
      name: 'news-center',
      title: '新闻中心'
    },
    [WebRouterName.ProductIntro]: <IRouterInfo>{
      name: 'product-introduction',
      title: '产品介绍'
    },
    [WebRouterName.XinAcademy]: <IRouterInfo>{
      name: 'xin-academy',
      title: '薪研院'
    },
    [WebRouterName.XinTown]: <IRouterInfo>{
      name: 'xin-town',
      title: '薪商小镇'
    },
    [WebRouterName.XinInnovationValley]: <IRouterInfo>{
      name: 'xin-innovation-valley',
      title: '薪码力'
    },
    [WebRouterName.JoinUs]: <IRouterInfo>{
      name: 'join-us',
      title: '加入我们'
    }
  }
  return routerInfos[key]
}

export const webRouteOrders: WebRouterName[] = [
  WebRouterName.Home,
  WebRouterName.AboutUs,
  WebRouterName.NewsCenter,
  WebRouterName.ProductIntro,
  WebRouterName.XinAcademy,
  WebRouterName.XinTown,
  WebRouterName.XinInnovationValley,
  WebRouterName.JoinUs,
]
