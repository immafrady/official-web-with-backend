import { Component, OnInit } from '@angular/core';
import { getWebRouterInfo, IRouterInfo, webRouteOrders } from "src/config/router-info";
import { getImage } from "src/utils/getImage";

@Component({
  selector: 'pc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getImage = getImage;

  headerRoutes: IRouterInfo[] = [];

  constructor() {

    for (let i = 0; i < webRouteOrders.length; i++) {
      this.headerRoutes.push(getWebRouterInfo(webRouteOrders[i]))
    }
  }

  ngOnInit(): void {
  }

}
