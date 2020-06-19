import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {NzButtonModule, NzFormModule, NzInputModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./login.service";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    LoginRoutingModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
