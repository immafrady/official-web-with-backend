import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { IIncidentDetailEntity, IIncidentYearEntity } from "@libs/entity/incident";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IncidentManagerService } from "@/app/shared/api/incident-manager.service";
import { IIncidentDetailEditOptions } from "@libs/request/incident";

@Component({
  selector: 'admin-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailListComponent implements OnInit {
  list: IIncidentDetailEntity[] = [];
  total: number = 0;
  editCache: { [key: string]: { edit: boolean; data: IIncidentDetailEditOptions } } = {};
  isVisible: boolean = false;
  form: FormGroup;
  yearOptions: IIncidentYearEntity[];
  yearFilters: {text: string, value: string}[];
  filterFn(list: string[], data: IIncidentDetailEntity) {
    return list.some(year => data.incidentYear.year === year)
  }

  constructor(private incidentService: IncidentManagerService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getDetailList()
    this.incidentService.getYearList().subscribe(({ data }) => {
      this.yearOptions = data.list
      this.yearFilters = data.list.map(item => {
        return {
          text: item.year,
          value: item.year
        }
      })
    })
  }

  getDetailList(): void {
    this.incidentService.getDetailList().subscribe(({ data }) => {
      this.total = data.total;
      this.list = data.list;
      this.list.forEach(item => {
        this.editCache[item.id] = {
          edit: false,
          data: { ...item, yearId: item.incidentYear.id }
        }
      })
    })
  }

  deleteDetail(id: number): void {
    this.incidentService.deleteDetail(id).subscribe(() => {
      this.getDetailList();
    })
  }

  saveEdit(id: string): void {
    this.incidentService.saveDetail(this.editCache[id].data).subscribe(() => {
      this.getDetailList();
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
    this.incidentService.saveDetail(this.form.value).subscribe(() => {
      this.getDetailList();
      this.isVisible = false
    })
  }

  showModal(): void {
    this.form = this.fb.group({
      detail: [null, [Validators.required]],
      title: [null, [Validators.required]],
      yearId: [null, [Validators.required]],
      sort: [null, [Validators.required]]
    })
    this.isVisible = true
  }
}
