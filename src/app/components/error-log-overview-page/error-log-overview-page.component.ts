import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ErrorLog } from 'src/app/models/error-log';

@Component({
  selector: 'app-error-log-overview-page',
  templateUrl: './error-log-overview-page.component.html',
  styleUrls: ['./error-log-overview-page.component.scss']
})
export class ErrorLogOverviewPageComponent implements OnInit {

  dataSource: any[];

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    /*
    this.data.getFoodFromTemplate().subscribe(x => {
      this.dataSource = x;
    });
    */
    this.loadErrorLogs();
  }

  update($event): void {
    const error = $event as ErrorLog;
    this.router.navigateByUrl('/ErrorLog/' + error.Id);
  }

  loadErrorLogs(): void {
    setTimeout(() => {
      this.dataSource = this.data.getLogs();
    }, 0);
  }


}


