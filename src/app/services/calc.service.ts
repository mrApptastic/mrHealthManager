import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  calculateAge(DateOfBirth: string): number {
    const birthday = new Date(DateOfBirth);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return isNaN(age) ? 0 : age;
  }

  calculateBMI(Weight: number, Height: number): string {
    const w = Weight;
    const h = (Height / 100);
    return (w / (Math.pow(h, 2))).toFixed(2);
  }

  calculateBMR(Age: any, Gender: boolean, Weight: number, Height: number): string {
    const a = typeof(Age) === 'number' ? parseInt(Age.toString(), 10) : this.calculateAge(Age);
    const g = Gender !== false;
    const w = Weight;
    const h = Height;
    return (g ? (665.09 + (9.56 * w) + (1.84 * h) - (4.67 * a)) : (66.47 + (13.75 * w) + (5.0 * h) - (6.75 * a))).toFixed(2);
  }
}
