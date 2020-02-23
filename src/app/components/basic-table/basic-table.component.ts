import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
  dataSource: any[];
  colums: string[];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      { Name : 'Henrik Hejsa', Age: 23 },
      { Name : 'Tommy Tusindsen', Age: 33 },
      { Name : 'Roben Knudsen' },
      { Name : 'Svend Dellepude', Age: 53, Country : 'Denmark' },
    ];
  }

}
