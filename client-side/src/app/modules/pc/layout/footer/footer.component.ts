import { Component, OnInit } from '@angular/core';
import { COMPANY_INFO } from "src/assets/config/resources";

@Component({
  selector: 'pc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  companyInfo = COMPANY_INFO;

  constructor() { }

  ngOnInit(): void {
  }

}
