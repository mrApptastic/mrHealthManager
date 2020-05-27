import { PersonConsumption } from './person-consumption';
import { PersonActivity } from './person-activity';

export class PlanDay {
    Id: number;
    Date: Date;
    Consumption: PersonConsumption[];
    Activities: PersonActivity[];
}
