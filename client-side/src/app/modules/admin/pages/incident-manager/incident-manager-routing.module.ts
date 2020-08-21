import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YearListComponent } from "@admin/pages/incident-manager/year-list/year-list.component";
import { DetailListComponent } from "@admin/pages/incident-manager/detail-list/detail-list.component";

const routes: Routes = [
  { path: 'year-list', component: YearListComponent },
  { path: 'detail-list', component: DetailListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentManagerRoutingModule { }
