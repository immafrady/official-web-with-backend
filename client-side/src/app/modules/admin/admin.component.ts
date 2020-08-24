import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('官网 - 后台')
  }

  ngOnInit(): void {
  }

}
