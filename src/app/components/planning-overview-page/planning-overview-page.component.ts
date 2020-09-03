import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-planning-overview-page',
  templateUrl: './planning-overview-page.component.html',
  styleUrls: ['./planning-overview-page.component.scss']
})
export class PlanningOverviewPageComponent implements OnInit {
  dataSource: any[];

  constructor(private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.reloadPlans();
  }

  update($event): void {
    const pl = $event as Plan;
    this.router.navigateByUrl('/Plan/' + pl.Id);
  }

  addPlan(): void {
      this.data.setPlan({
        Id: 0,
        Length: 0,
        Goal: 0,
        Days: new Array()
      });
      this.reloadPlans();
  }

  reloadPlans(): void {
    setTimeout(() => {
      this.dataSource = this.data.getPlans();
    }, 0);
  }

}
