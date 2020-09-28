import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BigDataManageService {

  constructor(
    private http: HttpClient
  ) { }

  saveBigData(data){
    return this.http.post('/big-data/edit', data)
  }

  getBigDataList() {
    return this.http.get('/big-data/list')
  }


}
