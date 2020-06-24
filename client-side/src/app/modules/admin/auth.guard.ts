import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { REQUEST_AUTH_TOKEN } from '../../../config/resources';

@Injectable()
export class AuthGuard implements CanActivateChild {
  private isLogin: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID)
    private platformId: object
  ) {
  }

  async canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Promise<boolean> {
    if (!this.isLogin) {
      if (isPlatformBrowser(this.platformId)) {
        if (localStorage.getItem(REQUEST_AUTH_TOKEN)) {
          try {
            await this.httpClient.get('/system/check-login-status').toPromise()
            this.isLogin = true
          } catch (e) {
            this.isLogin = false
          }
        }
      }
    }
    if (this.isLogin) {
      return true
    } else {
      await this.router.navigateByUrl('/admin/login')
      return false
    }
  }
}
