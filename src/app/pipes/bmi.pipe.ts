import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bmi'
})
export class BmiPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
