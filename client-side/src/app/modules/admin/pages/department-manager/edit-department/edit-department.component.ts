import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DepartmentManagerService} from "@admin/pages/department-manager/department-manager.service";

@Component({
  selector: 'admin-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private DepartmentManagerService: DepartmentManagerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      label: [null, [Validators.required]],
      sort: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity()
    }
    this.DepartmentManagerService.saveDepartment(this.validateForm.value).subscribe(() => {
      this.router.navigate(['/admin/department-manager'])
    })
  }
}
