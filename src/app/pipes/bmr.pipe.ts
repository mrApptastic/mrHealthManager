import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bmr'
})
export class BmrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
