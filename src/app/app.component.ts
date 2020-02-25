import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { forkJoin } from 'rxjs';
import { Data } from './models/data';

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
          dataObj.activities = results[0];
          dataObj.foodTypes = results[1];
          dataObj.food = results[2];
          this.data.setDataObject(dataObj);
          this.loadingData = false;
      });
    }
  }
}
