import { PersonActivity } from './person-activity';
import { PersonConsumption } from './person-consumption';
import { PersonHistory } from './person-history';

export class Person {
    Id: number;
    Name: string;
    Height: number;
    Weight: number;
    DateOfBirth: string;
    Gender: boolean;
    Activities: PersonActivity[];
    Consumption: PersonConsumption[];
    History: PersonHistory[];
}
