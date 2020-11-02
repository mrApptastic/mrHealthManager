import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorLog } from 'src/app/models/error-log';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-error-log-page',
  templateUrl: './error-log-page.component.html',
  styleUrls: ['./error-log-page.component.scss']
})
export class ErrorLogPageComponent implements OnInit {
  id: number;
  log: ErrorLog;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('Id'), 10);

    this.log = this.data.getLog(this.id);
  }

}
