import { Person } from './person';
import { Food } from './food';
import { FoodType } from './food-type';
import { Activity } from './activity';
import { Plan } from './plan';
import { ErrorLog } from './error-log';

export class Data {
    persons: Person[];
    food: Food[];
    foodTypes: FoodType[];
    activities: Activity[];
    plans: Plan[];
    logs: ErrorLog[];
}
