import {Component, OnInit} from '@angular/core';
import {getWebRouterInfo, RouterInfo, WebRouterName} from "src/config/router-info";

@Component({
  selector: 'pc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerRoutes: RouterInfo[] = [];

  constructor() {
    const routeOrders: WebRouterName[] = [
      WebRouterName.Home,
      WebRouterName.AboutUs,
      WebRouterName.NewsCenter,
      WebRouterName.ProductIntro,
      WebRouterName.XinAcademy,
      WebRouterName.XinInnovationValley,
      WebRouterName.XinTown,
      WebRouterName.JoinUs,
    ]
    for (let i = 0; i < routeOrders.length; i++) {
      this.headerRoutes.push(getWebRouterInfo(routeOrders[i]))
    }
  }

  ngOnInit(): void {
  }

}
