import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Activity } from 'src/app/models/activity';
import { Food } from 'src/app/models/food';
import { Person } from 'src/app/models/person';
import { PersonActivity } from 'src/app/models/person-activity';
import { PersonConsumption } from 'src/app/models/person-consumption';
import { CalcService } from 'src/app/services/calc.service';
import { DataService } from 'src/app/services/data.service';
declare function dataHussar(element, dataset, settings): void;

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent implements OnInit {
  id: number;
  person: Person;
  food: Food[];
  activities: Activity[];
  bmiGraph: any;
  foodToInsert: Food;
  foodToInsertAmount: number;
  foodSearch: string;
  foodRequest = new Subject<string>();
  actToInsert: Activity;
  actToInsertAmount: number;
  actToInsertKmH: number;
  actSearch: string;
  actRequest = new Subject<string>();

  constructor(private route: ActivatedRoute, private data: DataService, private calc: CalcService) {
    this.foodRequest
    .pipe(
      debounceTime(1500))
    .subscribe(() => {
      const val = this.foodSearch.toLowerCase();
      const f = this.food.find(x => x.Name.toLowerCase().indexOf(val) !== -1);
      if (f) {
        this.foodToInsert = f;
        this.foodSearch = f.Name;
      }
    });

    this.actRequest
    .pipe(
      debounceTime(1500))
    .subscribe(() => {
      const val = this.actSearch.toLowerCase();
      const a = this.activities.find(x => x.Name.toLowerCase().indexOf(val) !== -1);
      if (a) {
        this.actToInsert = a;
        this.actSearch = a.Name;
      }
    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('Id'), 10);
    this.reloadData();
    this.food = this.data.getFood();
    this.activities = this.data.getActivities().filter(x => x.UseKmH !== true);
  }

  reloadData() {
    setTimeout(() => {
      this.person = this.data.getPerson(this.id);
      this.drawBMIGraph();
    }, 0);
  }

  update(person: Person) {
    this.data.setPerson(person);
    this.drawBMIGraph();
  }

  updateGender(value) {
    this.person.Gender = value;
    this.data.setPerson(this.person);
  }

  getGender() {
    return this.person.Gender.toString().toLowerCase() === "true";
  }

  handleFoodSearch(): void {
    this.foodRequest.next();
  }

  handleActivitySearch(): void {
    this.actRequest.next();
  }

  addFood(): void {
    this.person.Consumption.push({
      Name: this.foodToInsert.Name + " (" + this.foodToInsertAmount + " g)",
      KCal: this.foodToInsert.Calories * this.foodToInsertAmount
    });
    this.update(this.person);
    this.reloadData();
    this.foodSearch = null;
    this.foodToInsert = null;
    this.foodToInsertAmount = null;
  }

  addActivity(): void {
    this.person.Activities.push({
      Name: this.actToInsert.Name,
      KCal: this.actToInsert.kCal * this.actToInsertAmount * 60 * (this.actToInsertKmH ? this.actToInsertKmH : 1),
      Minutes: this.actToInsertAmount / 60
    });
    this.update(this.person);
    this.reloadData();
    this.actSearch = null;
    this.actToInsert = null;
    this.actToInsertAmount = null;
    this.actToInsertKmH = null;
  }

  deleteFood($event): void {
    const ok = confirm("Are you sure you want to delete this item?");

    if (ok) {
      const item = $event as PersonConsumption;
      const index = this.person.Consumption.findIndex(x => x.Name === item.Name);
      if (index >= 0) {
        this.person.Consumption.splice(index, 1);
        this.data.setPerson(this.person);
        this.reloadData();
      }
    }
  }

  deleteActivity($event): void {
    const ok = confirm("Are you sure you want to delete this item?");

    if (ok) {
      const item = $event as PersonActivity;
      const index = this.person.Activities.findIndex(x => x.Name === item.Name);
      if (index >= 0) {
        this.person.Activities.splice(index, 1);
        this.data.setPerson(this.person);
        this.reloadData();
      }
    }
  }

  getTotalConsumption() {
    let sum = 0;

    for (const uha of this.person.Consumption) {
      sum += uha.KCal;
    }

    return sum;
  }

  getTotalActivities() {
    let sum = 0;

    sum = parseFloat(this.calc.calculateBMR(this.calc.calculateAge(this.person.DateOfBirth), this.person.Gender, this.person.Weight, this.person.Height));

    for (const uha of this.person.Activities) {
      sum += uha.KCal;
    }

    return sum;
  }

  drawBMIGraph() {
    const today = new Date();
    const dateArr = new Array();
    const balance = (this.getTotalActivities() - this.getTotalConsumption()) / 1000;

    for (let i = 0; i <= 8; i++) {
      const currentDay = this.addDays(today, 7 * i);

      dateArr.push(
        {
          Id: i + 1,
          Label: currentDay.toLocaleDateString(),
          Value: this.calc.calculateBMI((this.person.Weight - (balance * i)), this.person.Height)
        });
    }

    setTimeout(() => {
      this.bmiGraph = new dataHussar('bmiGraph', dateArr, {});
    }, 0);

  }

  private addDays(date, days): Date {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

}
