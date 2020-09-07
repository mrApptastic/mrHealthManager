import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { FoodType } from '../models/food-type';
import { Food } from '../models/food';
import { Person } from '../models/person';
import { CookieService } from './cookie.service';
import { Data } from '../models/data';
import { Plan } from '../models/plan';
import { ErrorLog } from '../models/error-log';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = 'DataStorage';

  constructor(private http: HttpClient, private cookie: CookieService) { }

  /* Persons */
  getPerson(id: number): Person {
    return this.getSingleData('persons', id) as Person;
  }

  getPersons(): Person[] {
    return this.getData('persons') as Person[];
  }

  setPerson(person: Person): Person {
    return this.setSingleData(person, "persons") as Person;
  }

  setPersons(persons: Person[]): Person[] {
    return this.setData(persons, 'persons') as Person[];
  }

  /* Activities */
  getActivitiesFromTemplate(): Observable<Activity[]> {
    return this.http.get<Activity[]>('assets/activities.json');
  }

  getActivity(id: number): Activity {
    return this.getSingleData('activities', id) as Activity;
  }

  getActivities(): Activity[] {
    return this.getData('activities') as Activity[];
  }

  setActivity(activity: Activity): Activity {
    return this.setSingleData(activity, "activities") as Activity;
  }

  setActivities(activities: Activity[]): Activity[] {
    return this.setData(activities, 'activities') as Activity[];
  }

  /* Food Types */
  getFoodTypesFromTemplate(): Observable<FoodType[]> {
    return this.http.get<FoodType[]>('assets/foodTypes.json');
  }

  getFoodType(id: number): FoodType {
    return this.getSingleData('foodTypes', id) as FoodType;
  }

  getFoodTypes(): FoodType[] {
    return this.getData('foodTypes') as FoodType[];
  }

  setFoodType(foodtype: FoodType): FoodType {
    return this.setSingleData(foodtype, "foodTypes") as FoodType;
  }

  setFoodTypes(foodtypes: FoodType[]): FoodType[] {
    return this.setData(foodtypes, 'foodTypes') as FoodType[];
  }

  /* Food */
  getFoodFromTemplate(): Observable<Food[]> {
    return this.http.get<Food[]>('assets/food.json');
  }

  getSingleFood(id: number): Food {
    return this.getSingleData('foodTypes', id) as Food;
  }

  getFood(): Food[] {
    return this.getData('foodTypes') as Food[];
  }

  setSingleFood(food: Food): Food {
    return this.setSingleData(food, "foodTypes") as Food;
  }

  setFood(food: Food[]): Food[] {
    return this.setData(food, 'foodTypes') as Food[];
  }

  /* Plans */
  getPlan(id: number): Plan {
    return this.getSingleData('plans', id) as Plan;
  }

  getPlans(): Plan[] {
    return this.getData('plans') as Plan[];
  }

  setPlan(plan: Plan): Plan {
    return this.setSingleData(plan, "plans") as Plan;
  }

  setPlans(plans: Plan[]): Plan[] {
    return this.setData(plans, 'plans') as Plan[];
  }

  /* Logs */
  getLog(id: number): ErrorLog {
    return this.getSingleData('logs', id) as ErrorLog;
  }

  getLogs(): ErrorLog[] {
    return this.getData('logs') as ErrorLog[];
  }

  setLog(log: ErrorLog): ErrorLog {
    return this.setSingleData(log, "logs") as ErrorLog;
  }

  seLogs(logs: ErrorLog[]): ErrorLog[] {
    return this.setData(logs, 'logs') as ErrorLog[];
  }

  dataCheck(): boolean {
    return !!this.cookie.getLocal(this.data);
  }

  getSingleData(type: string, id: number): any {
    return this.getData(type).find(x => x.Id === id);
  }

  getData(type: string): any {
    if (this.dataCheck()) {
      const dataObj = this.getDataObject() as Data;
      return dataObj[type];
    }  else {
      throw new console.error('Unable to get data ' + type);
    }
  }

  setSingleData(changes: any, type: string): any {
    const dataObj = this.getDataObject();
    const list = dataObj[type];

    if (changes && list.some(x => x?.Id === changes?.Id)) {
      const item =  list.find(x => x.Id === changes.Id);
      for (const property in changes) {
        item[property] = changes[property];
      }
    } else if (list) {
      if (changes?.Id === 0) {
        if (list.length > 0) {
          changes.Id = list.sort((x, y) => y.Id - x.Id)[0].Id + 1;
        } else {
          changes.Id = 1;
        }
      }
      list.push(changes);
    }

    this.setData(dataObj[type], type);

    return changes;

  }

  setData(changes: any, type: string): any {
    const dataObj = this.getDataObject();
    dataObj[type] = changes;
    this.setDataObject(dataObj);

    return changes;
  }

  getDataObject(): Data {
    return JSON.parse(this.cookie.getLocal(this.data)) as Data;
  }

  setDataObject(dataObj: Data) {
    this.cookie.setLocal(this.data, JSON.stringify(dataObj));
  }
}
