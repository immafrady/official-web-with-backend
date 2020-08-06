import { Pipe, PipeTransform } from '@angular/core';
import { PicturePriority, PicturePriorityLabel } from "@libs/enums/picture";

@Pipe({
  name: 'picturePriority'
})
export class PicturePriorityPipe implements PipeTransform {

  transform(value: PicturePriority): unknown {
    return PicturePriorityLabel[value]
  }

}
