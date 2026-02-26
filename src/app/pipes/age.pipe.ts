import { Pipe, PipeTransform } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Pipe({
  standalone: false,
  name: 'age'
})
export class AgePipe implements PipeTransform {
  constructor(private calc: CalcService) {}

  transform(DateOfBirth: string): number {
    return this.calc.calculateAge(DateOfBirth);
  }
}
