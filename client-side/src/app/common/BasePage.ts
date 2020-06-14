import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {APPLICATION_NAME} from "../../config/resources";
import {IRouterData} from "../../config/router-info";

export class BasePage {
  constructor(
    private metaService: Meta,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd )
    ).subscribe(() => {
      this.activatedRoute.data.subscribe((data: IRouterData) => {
        this.titleService.setTitle(`${APPLICATION_NAME}${data.title ? ' - ' + data.title : '' }`)
      })
    })
  }
}
