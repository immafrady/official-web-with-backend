import { Pipe, PipeTransform } from '@angular/core';
import { PictureType, PictureTypeLabel } from "@libs/enums/picture";

@Pipe({
  name: 'pictureType'
})
export class PictureTypePipe implements PipeTransform {

  transform(value: PictureType): unknown {
    return PictureTypeLabel[value];
  }

}
