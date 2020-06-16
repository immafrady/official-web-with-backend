import { Component, OnInit } from '@angular/core';
import { getWebRouterInfo, IRouterInfo, webRouteOrders } from "src/config/router-info";
import {PATH_IMG} from "../../../../../config/images";

@Component({
  selector: 'pc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  images = PATH_IMG;

  headerRoutes: IRouterInfo[] = [];

  constructor() {

    for (let i = 0; i < webRouteOrders.length; i++) {
      this.headerRoutes.push(getWebRouterInfo(webRouteOrders[i]))
    }
  }

  ngOnInit(): void {
  }

}
