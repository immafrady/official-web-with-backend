import { Component, OnInit } from '@angular/core';
import {DepartmentManagerService} from "@admin/pages/department-manager/department-manager.service";
import {IJobDepartmentEditOptions} from "@libs/request/job";

@Component({
  selector: 'admin-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  editCache: { [key: string]: { edit: boolean; data: IJobDepartmentEditOptions } } = {};
  departmentList = [];
  total = 0;
  constructor(
    private DepartmentManagerService: DepartmentManagerService
  ) { }

  ngOnInit(): void {
    this.getDepartmentList();
  }

  getDepartmentList(): void {
    this.DepartmentManagerService.getDepartmentList().subscribe(({ data }) => {
      this.departmentList = data.list;
      this.total = data.total;
      this.departmentList.forEach(item => {
        this.editCache[item.id] = {
          edit: false,
          data: { ...item }
        };
      });
    })
  }

  saveEdit(id: string): void {
    this.DepartmentManagerService.saveDepartment(this.editCache[id].data).subscribe(() => {
      this.getDepartmentList()
    })
  }

  updateEditStatus(id: string, judge: boolean): void {
    this.editCache[id].edit = judge;
  }

  deleteDepart(id): void {
    this.DepartmentManagerService.deleteDepartment(id).subscribe(() => {
      this.getDepartmentList()
    })
  }

}
