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

export interface RouterInfo {
  name: string;
  title: string;
}

export function getWebRouterInfo(key: WebRouterName): RouterInfo {
  const routerInfos = {
    [WebRouterName.Home]: <RouterInfo>{
      name: '',
      title: '首页'
    },
    [WebRouterName.AboutUs]: <RouterInfo>{
      name: 'about-us',
      title: '关于我们'
    },
    [WebRouterName.NewsCenter]: <RouterInfo>{
      name: 'news-center',
      title: '新闻中心'
    },
    [WebRouterName.ProductIntro]: <RouterInfo>{
      name: 'product-introduction',
      title: '产品介绍'
    },
    [WebRouterName.XinAcademy]: <RouterInfo>{
      name: 'xin-academy',
      title: '薪研院'
    },
    [WebRouterName.XinInnovationValley]: <RouterInfo>{
      name: 'xin-innovation-valley',
      title: '薪创谷'
    },
    [WebRouterName.XinTown]: <RouterInfo>{
      name: 'xin-town',
      title: '薪商小镇'
    },
    [WebRouterName.JoinUs]: <RouterInfo>{
      name: 'join-us',
      title: '加入我们'
    }
  }
  return routerInfos[key]
}

