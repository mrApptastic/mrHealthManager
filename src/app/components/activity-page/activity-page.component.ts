import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss']
})
export class ActivityPageComponent implements OnInit {
  dataSource: any[];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  update($event): void {
    this.data.setActivity($event);
  }

  addActivity(): void {
    this.data.setActivity({
      Id: 0,
      Name: '',
      kCal: 0,
      UseKmH: false
    });
    this.reloadData();
  }

  reloadData(): void {
    setTimeout(() => {
      this.dataSource = this.data.getActivities();
    }, 0);
  }
}
