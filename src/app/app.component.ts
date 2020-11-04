import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { forkJoin } from 'rxjs';
import { Data } from './models/data';
import { Person } from './models/person';
import { CookieService } from './services/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'mrHealthManager';
  loadingData = false;
  constructor(private data: DataService, private cookie: CookieService) {}

  ngOnInit() {
    if (!this.data.dataCheck()) {
      this.loadingData = true;
      forkJoin([
        this.data.getActivitiesFromTemplate(),
        this.data.getFoodTypesFromTemplate(),
        this.data.getFoodFromTemplate()
         ]).subscribe(results => {
          this.cookie.accept();
          const dataObj = new Data();
          dataObj.persons = new Array();
          dataObj.plans = new Array();
          dataObj.logs = new Array();
          dataObj.activities = results[0];
          dataObj.foodTypes = results[1];
          dataObj.food = results[2];
          this.data.setDataObject(dataObj);
          this.data.setPerson({
            Id : 0,
            Name : 'Torben Tobak',
            Height: 180,
            Weight: 87,
            DateOfBirth: '1991-04-23',
            Gender: false,
            Activities: new Array(),
            Consumption: new Array(),
            History: new Array(),
            StrideLength: 75,
            Plans: new Array()
          } as Person);
          this.data.setPerson({
            Id : 0,
            Name : 'Tine Pingvin',
            Height: 159,
            Weight: 76,
            DateOfBirth: '1989-06-27',
            Gender: true,
            Activities: new Array(),
            Consumption: new Array(),
            History: new Array(),
            StrideLength: 65,
            Plans: new Array()
          } as Person);
          this.data.setPerson({
            Id : 1,
            Name : 'Bjarte Fiffi Longwind',
            Height: 202,
            Weight: 96,
            DateOfBirth: '1961-01-29',
            Gender: false,
            Activities: new Array(),
            Consumption: new Array(),
            History: new Array(),
            StrideLength: 90,
            Plans: new Array()
          } as Person);
          this.data.setPerson({
            Id : 5,
            Name : 'Leon Gungadin Mogensen',
            Height: 175,
            Weight: 83,
            DateOfBirth: '1980-12-24',
            Gender: false,
            Activities: new Array(),
            Consumption: new Array(),
            History: new Array(),
            StrideLength: 75,
            Plans: new Array()
          } as Person);
          this.data.setPerson({
            Id : 0,
            Name : 'Torben Tobak',
            Height: 180,
            Weight: 87,
            DateOfBirth: '1991-04-23',
            Gender: false,
            Activities: new Array(),
            Consumption: new Array(),
            History: new Array(),
            StrideLength: 75,
            Plans: new Array()
          } as Person);
          console.log(this.data.getDataObject());
          this.loadingData = false;
      });
    }
  }
}
