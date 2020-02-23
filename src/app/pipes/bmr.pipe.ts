import { Pipe, PipeTransform } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Pipe({
  name: 'bmr'
})
export class BmrPipe implements PipeTransform {

  constructor(private calc: CalcService) { }

  transform(Age: any, Gender: boolean, Weight: string, Height: string): string {
    return this.calc.calculateBMR(Age, Gender, Weight, Height);
  }

}
