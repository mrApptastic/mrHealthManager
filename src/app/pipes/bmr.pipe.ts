import { Pipe, PipeTransform } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Pipe({
  name: 'bmr'
})
export class BmrPipe implements PipeTransform {

  constructor(private calc: CalcService) { }

  transform(Age: any, Gender: boolean, Weight: number, Height: number): string {
    return this.calc.calculateBMR(Age, Gender, Weight, Height);
  }

}
