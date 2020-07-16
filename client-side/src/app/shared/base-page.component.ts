import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import { APPLICATION_NAME, SEO_DEFAULT_TITLE, SEO_DESCRIPTION } from "@/config/resources";
import {IRouterData} from '@/config/router-info';

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
        if (data) {
          if (data.title) {
            titleService.setTitle(`${APPLICATION_NAME} - ${data.title}`)
          } else {
            titleService.setTitle(SEO_DEFAULT_TITLE)
          }

          metaService.addTags([
            { name: 'description', content: data.description || SEO_DESCRIPTION },
            { name: 'keywords', content: data.keywords }
          ])
        }
      })
    })
  }
}
