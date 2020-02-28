import { Pipe, PipeTransform } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Pipe({
  name: 'bmi'
})
export class BmiPipe implements PipeTransform {

  constructor(private calc: CalcService) { }

  transform(Weight: number, Height: number): string {
    return this.calc.calculateBMI(Weight, Height);
  }

}
