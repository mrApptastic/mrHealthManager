import { PersonConsumption } from './person-consumption';
import { PersonActivity } from './person-activity';

export class PersonHistory {
    Id!: number;
    Date!: Date;
    Weight?: number;
    Consumption!: PersonConsumption[];
    Activities!: PersonActivity[];
}
