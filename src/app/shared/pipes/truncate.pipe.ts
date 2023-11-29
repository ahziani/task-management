import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 100): unknown {
    if (!value) return value;
    //const limit = 100;

    if (value.length < limit) {
      return value ;
    } else {
      return value.substring(0, limit) + '...';
    }
  }
}
