import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgResize'
})
export class ImgResizePipe implements PipeTransform {

  transform(value: unknown, width: number,height: number, ...args: unknown[]): unknown {
    console.log(width);
    return `${value}?x-oss-process=image/resize,m_fill,w_${width},h_${height}`;
  }

}
