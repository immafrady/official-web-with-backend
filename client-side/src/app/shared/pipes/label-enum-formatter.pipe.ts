import { Pipe, PipeTransform } from '@angular/core';
import { NzTableFilterList } from "ng-zorro-antd/table/src/table.types";

@Pipe({
  name: 'labelEnumFormatter'
})
export class LabelEnumFormatterPipe implements PipeTransform {

  transform(data: { [key: string]: string }): NzTableFilterList {
    const result = [];
    for (let d in data) {
      if (data.hasOwnProperty(d)) {
        result.push({
          text: data[d],
          value: d
        })
      }
    }
    return result;
  }

}
