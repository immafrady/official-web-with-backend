import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-recruitment-manager',
  templateUrl: './recruitment-manager.component.html',
  styleUrls: ['./recruitment-manager.component.scss']
})
export class RecruitmentManagerComponent implements OnInit {

  recruitmentList = [];
  total = 0;
  constructor() { }

  ngOnInit(): void {
  }
  deleteRecruit(id): void {

  }

}
