import { PersonActivity } from './person-activity';
import { PersonConsumption } from './person-consumption';
import { PersonHistory } from './person-history';
import { Plan } from './plan';

export class Person {
    Id: number;
    Name: string;
    Height: number;
    Weight: number;
    DateOfBirth: string;
    Gender: boolean;
    StrideLength?: number;
    Activities: PersonActivity[];
    Consumption: PersonConsumption[];
    History: PersonHistory[];
    Plans: Plan[];
}
