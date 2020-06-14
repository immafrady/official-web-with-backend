import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {APPLICATION_NAME} from "../../config/resources";
import {IRouterData} from "../../config/router-info";

export class BasePageComponent {
  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd )
    ).subscribe(() => {
      activatedRoute.data.subscribe((data: IRouterData) => {
        titleService.setTitle(`${APPLICATION_NAME}${data.title ? ' - ' + data.title : '' }`)
      })
    })
  }
}
