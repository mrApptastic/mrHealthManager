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
    setTimeout(() => {
      this.dataSource = this.data.getActivities();
    }, 0);
  }

  update($event): void {
    this.data.setActivity($event);
  }
}