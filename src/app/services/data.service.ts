import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { FoodType } from '../models/food-type';
import { Food } from '../models/food';
import { Person } from '../models/person';
import { CookieService } from './cookie.service';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = 'DataStorage';

  constructor(private http: HttpClient, private cookie: CookieService) { }

  getPerson(id: number): Person {
    return this.getPersons().find(x => x.Id === id);
  }

  getPersons(): Person[] {
    return this.getData('persons');
  }

  setPerson(person: Person): Person {
    const personList = this.getPersons();
    if (personList && personList.some(x => x.Id === person.Id)) {
      const per =  personList.find(x => x.Id === person.Id);
      per.Name = person.Name;
      per.Height = person.Height;
      per.Weight = person.Weight;
      per.DateOfBirth = person.DateOfBirth;
      per.Gender = person.Gender;
      if (person.Activities) {
        per.Activities = new Array();
      }
      if (person.Consumption) {
        per.Consumption = new Array();
      }
      if (person.History) {
        per.History = new Array();
      }
    } else if (personList) {
      if (person.Id === 0) {
        if (personList.length > 0) {
          person.Id = personList.sort((x, y) => y.Id - x.Id)[0].Id + 1;
        } else {
          person.Id = 1;
        }
      }
      personList.push(person);
    }
    this.setPersons(personList);

    return person;
  }

  setPersons(persons: Person[]): void {
    const dataObj = this.getDataObject();
    dataObj.persons = persons;
    this.setDataObject(dataObj);
  }

  getActivitiesFromTemplate(): Observable<Activity[]> {
    return this.http.get<Activity[]>('assets/activities.json');
  }

  getActivity(id: number): Activity {
    return this.getActivities().find(x => x.Id === id);
  }

  getActivities(): Activity[] {
    return this.getData('activities');
  }

  setActivity(activity: Activity): Activity {
    const activityList = this.getActivities();
    if (activityList && activityList.some(x => x.Id === activity.Id)) {
      const act =  activityList.find(x => x.Id === activity.Id);
      act.kCal = activity.kCal;
      act.Name = activity.Name;
      act.UseKmH = activity.UseKmH;
    } else if (activityList) {
      if (activity.Id === 0) {
        if (activityList.length > 0) {
          activity.Id = activityList.sort((x, y) => y.Id - x.Id)[0].Id + 1;
        } else {
          activity.Id = 1;
        }
      }
      activityList.push(activity);
    }
    this.setActivities(activityList);

    return activity;
  }

  setActivities(activities: Activity[]): void {
    const dataObj = this.getDataObject();
    dataObj.activities = activities;
    this.setDataObject(dataObj);
  }

  getFoodTypesFromTemplate(): Observable<FoodType[]> {
    return this.http.get<FoodType[]>('assets/foodTypes.json');
  }

  getFoodTypes(): FoodType[] {
    return this.getData('foodTypes');
  }

  setFoodType(foodType: FoodType): FoodType {
    const foodTypeList = this.getFoodTypes();
    if (foodTypeList && foodTypeList.some(x => x.Id === foodType.Id)) {
      const ft =  foodTypeList.find(x => x.Id === foodType.Id);
      ft.Type = foodType.Type;
    } else if (foodTypeList) {
      if (foodType.Id === 0) {
        if (foodTypeList.length > 0) {
          foodType.Id = foodTypeList.sort((x, y) => y.Id - x.Id)[0].Id + 1;
        } else {
          foodType.Id = 1;
        }
      }
      foodTypeList.push(foodType);
    }
    this.setFoodTypes(foodTypeList);

    return foodType;
  }

  setFoodTypes(foodTypes: FoodType[]): void {
    const dataObj = this.getDataObject();
    dataObj.foodTypes = foodTypes;
    this.setDataObject(dataObj);
  }

  getFoodFromTemplate(): Observable<Food[]> {
    return this.http.get<Food[]>('assets/food.json');
  }

  getFood(): Food[] {
    return this.getData('food');
  }

  dataCheck(): boolean {
    return !!this.cookie.getLocal(this.data);
  }

  getData(type: string): any {
    if (this.dataCheck()) {
      const dataObj = this.getDataObject() as Data;
      return dataObj[type];
    }  else {
      throw new console.error('Unable to get data ' + type);
    }
  }

  getDataObject(): Data {
    return JSON.parse(this.cookie.getLocal(this.data)) as Data;
  }

  setDataObject(dataObj: Data) {
    this.cookie.setLocal(this.data, JSON.stringify(dataObj));
  }
}
