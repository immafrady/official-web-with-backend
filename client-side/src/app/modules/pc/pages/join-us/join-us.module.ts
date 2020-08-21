import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinUsRoutingModule } from './join-us-routing.module';
import {PcSharedModule} from '@pc/shared/pc-shared.module';
import {JoinUsComponent} from "./join-us/join-us.component";
import {NzTableModule, NzTabsModule, NzIconModule, NzTagModule, NzSpinModule, NzPaginationModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";
import { EnterpriseCultureMoreComponent } from './enterprise-culture-more/enterprise-culture-more.component';
import {NgxImageGalleryModule} from "@web-aid-kit/ngx-image-gallery";


@NgModule({
  declarations: [
    JoinUsComponent,
    EnterpriseCultureMoreComponent
  ],
  imports: [
    CommonModule,
    JoinUsRoutingModule,
    PcSharedModule,
    NzTabsModule,
    NzTableModule,
    FormsModule,
    NzIconModule,
    NzTagModule,
    NgxImageGalleryModule,
    NzSpinModule,
    NzPaginationModule
  ]
})
export class JoinUsModule { }
