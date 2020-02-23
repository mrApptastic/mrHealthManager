import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { FoodType } from '../models/food-type';
import { Food } from '../models/food';
import { Person } from '../models/person';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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
    return null;
  }

  setPersons(person: Person): void {
    this.cookie.setLocal(this.persons, JSON.stringify(person));
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>('assets/activities.json');
  }

  getFoodTypes(): Observable<FoodType[]> {
    return this.http.get<FoodType[]>('assets/foodTypes.json');
  }

  getFood(): Observable<Food[]> {
    return this.http.get<Food[]>('assets/food.json');
  }
}
