import { Pipe, PipeTransform } from '@angular/core';
import { ArticleStatus, ArticleStatusLabel } from '../../../../../libs/enums/article';

@Pipe({
  name: 'articleStatus'
})
export class ArticleStatusPipe implements PipeTransform {

  transform(value: ArticleStatus):string {
    return ArticleStatusLabel[value]
  }

}
