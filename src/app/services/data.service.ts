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
  persons = 'PersonStorage';
  food = 'FoodStorage';
  activities = 'ActivityStorage';

  constructor(private http: HttpClient, private cookie: CookieService) { }

  getPerson(id: number): Person {
    return null;
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

  getPersons(): Person[] {
    const storedPersons = this.cookie.getLocal(this.persons);
    if (storedPersons) {
      return JSON.parse(storedPersons) as Person[];
    } else {

    }
  }

  setPersons(person: Person[]): void {
    this.cookie.setLocal(this.persons, JSON.stringify(person));
  }

  getActivitiesFromTemplate(): Observable<Activity[]> {
    return this.http.get<Activity[]>('assets/activities.json');
  }

  getFoodTypesFromTemplate(): Observable<FoodType[]> {
    return this.http.get<FoodType[]>('assets/foodTypes.json');
  }

  getFoodFromTemplate(): Observable<Food[]> {
    return this.http.get<Food[]>('assets/food.json');
  }

  dataCheck(): boolean {
    return !!this.cookie.getLocal(this.data);
  }

  getDataObject(): Data {
    return JSON.parse(this.cookie.getLocal(this.data)) as Data;
  }

  setDataObject(dataObj: Data) {
    this.cookie.setLocal(this.data, JSON.stringify(dataObj));
  }
}
/*
     https://coryrylan.com/blog/angular-multiple-http-requests-with-rxjs;
    const storedData = this.cookie.getLocal(this.data);
    if (!storedData) {
      const dataObj = new Data();
      dataObj.persons = new Array();
      this.getActivitiesFromTemplate().subscribe(a => {
        dataObj.activities = a;
        this.getFoodTypesFromTemplate().subscribe(t => {
          dataObj.foodTypes = t;
          this.getFoodFromTemplate().subscribe(f => {
            dataObj.food = f;
            this.cookie.setLocal(this.data, JSON.stringify(dataObj));
          });
        });
      });
    }
*/
