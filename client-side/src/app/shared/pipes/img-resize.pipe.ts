import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgResize'
})
export class ImgResizePipe implements PipeTransform {

  transform(value: string, width: number,height: number): string {
    return `${value}?x-oss-process=image/resize,m_fill,w_${width},h_${height}`;
  }

}
