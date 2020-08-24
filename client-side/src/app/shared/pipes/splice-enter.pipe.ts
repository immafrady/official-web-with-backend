import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spliceEnter'
})
export class SpliceEnterPipe implements PipeTransform {

  transform(value: string): string[] {
    return value?.split('\n');
  }

}
