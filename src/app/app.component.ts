import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { forkJoin } from 'rxjs';
import { Data } from './models/data';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'mrHealthManager';
  loadingData = false;
  constructor(private data: DataService) {}

  ngOnInit() {
    if (!this.data.dataCheck()) {
      this.loadingData = true;
      forkJoin([
        this.data.getActivitiesFromTemplate(),
        this.data.getFoodTypesFromTemplate(),
        this.data.getFoodFromTemplate()
         ]).subscribe(results => {
          const dataObj = new Data();
          dataObj.persons = new Array();
          dataObj.plans = new Array();
          dataObj.activities = results[0];
          dataObj.foodTypes = results[1];
          dataObj.food = results[2];
          this.data.setDataObject(dataObj);
          this.data.setPerson({
            Id : 0,
            Name : 'Henrik',
            Height: 180,
            Weight: 87,
            DateOfBirth: '1981-04-23',
            Gender: false,
            Activities: new Array(),
            Consumption: new Array(),
            History: new Array()
          } as Person);
          this.data.setPerson({
            Id : 0,
            Name : 'Signe',
            Height: 180,
            Weight: 87,
            DateOfBirth: '1981-04-23',
            Gender: true,
            Activities: new Array(),
            Consumption: new Array(),
            History: new Array()
          } as Person);
          this.data.setPerson({
            Id : 1,
            Name : 'Per',
            Height: 180,
            Weight: 87,
            DateOfBirth: '1981-04-23',
            Gender: true,
            Activities: new Array(),
            Consumption: new Array(),
            History: new Array()
          } as Person);
          this.data.setPerson({
            Id : 5,
            Name : 'Affe',
            Height: 180,
            Weight: 87,
            DateOfBirth: '1981-04-23',
            Gender: true,
            Activities: new Array(),
            Consumption: new Array(),
            History: new Array()
          } as Person);
          this.data.setPerson({
            Id : 0,
            Name : 'Hattehår',
            Height: 180,
            Weight: 87,
            DateOfBirth: '1981-04-23',
            Gender: true,
            Activities: new Array(),
            Consumption: new Array(),
            History: new Array()
          } as Person);
          console.log(this.data.getDataObject());
          this.loadingData = false;
      });
    }
  }
}
