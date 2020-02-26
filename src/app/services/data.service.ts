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

    } else {
      if (person.Id === 0) {
        person.Id = personList.sort((x, y) => y.Id - x.Id)[0].Id + 1;
      }
      personList.push(person);
    }

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

  getActivities(): Activity[] {
    return this.getData('activities');
  }

  getFoodTypesFromTemplate(): Observable<FoodType[]> {
    return this.http.get<FoodType[]>('assets/foodTypes.json');
  }

  getFoodTypes(): FoodType[] {
    return this.getData('foodTypes');
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
      return dataObj[type]
    } else {
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
