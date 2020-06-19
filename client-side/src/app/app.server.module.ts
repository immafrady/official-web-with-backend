import { NgModule } from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { UniversalInterceptor } from "./universal.interceptor";
import { BrowserModule } from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {NZ_I18N, zh_CN, NzI18nModule} from "ng-zorro-antd/i18n";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NoopAnimationsModule,
    NzI18nModule
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UniversalInterceptor,
    multi: true
  }, {
    provide: NZ_I18N,
    useValue: zh_CN
  }]
})
export class AppServerModule {}
