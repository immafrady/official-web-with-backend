import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { IncidentManagerService } from "@/app/shared/api/incident-manager.service";
import { IIncidentYearEntity } from "@libs/entity/incident";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'admin-year-list',
  templateUrl: './year-list.component.html',
  styleUrls: ['./year-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class YearListComponent implements OnInit {
  list: IIncidentYearEntity[] = [];
  total: number = 0;
  editCache: { [key: string]: { edit: boolean; data: IIncidentYearEntity } } = {};
  isVisible: boolean = false;
  form: FormGroup;

  constructor(private incidentService: IncidentManagerService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getYearList();
  }

  getYearList(): void {
    this.incidentService.getYearList().subscribe(({ data }) => {
      this.total = data.total;
      this.list = data.list;
      this.list.forEach(item => {
        this.editCache[item.id] = {
          edit: false,
          data: { ...item }
        }
      })
    })
  }

  deleteYear(id: number): void {
    this.incidentService.deleteYear(id).subscribe(() => {
      this.getYearList();
    })
  }

  saveEdit(id: string): void {
    this.incidentService.saveYear(this.editCache[id].data).subscribe(() => {
      this.getYearList();
    })
  }

  updateEditStatus(id: string, judge: boolean): void {
    this.editCache[id].edit = judge
  }

  handleSaveCancel(): void {
    this.isVisible = false
  }

  handleSave(): void {
    for (const key in this.form.controls) {
      this.form.controls[key].markAsDirty();
      this.form.controls[key].updateValueAndValidity();
    }
    this.incidentService.saveYear(this.form.value).subscribe(() => {
      this.getYearList();
      this.isVisible = false
    })
  }

  showModal(): void {
    this.form = this.fb.group({
      label: [null, [Validators.required]],
      sort: [null, [Validators.required]],
      year: [null, [Validators.required]]
    })
    this.isVisible = true
  }

}
