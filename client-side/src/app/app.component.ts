import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(
    private router: Router
  ) {}
  ngOnInit() {
    this.router.events.subscribe(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }
}
