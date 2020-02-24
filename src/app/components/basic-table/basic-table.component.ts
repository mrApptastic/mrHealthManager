import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit, OnChanges {
  @Input() dataSource: any[];
  columns: any[];
  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(): void {
    this.loadData();
  }

  loadData() {
    if (this.dataSource) {
      this.columns = this.getColumns(this.dataSource);
    }
  }

  private getColumns(data: any[]) {
    let columns = new Array();

    for (const row of data) {
      for (const [key,value] of Object.entries(row) ) {
        if (columns.some(x => x.Name === key)) {
          const length = value.toString().length;
          let col = columns.find(x => x.Name === key);
          if (length > col.Width) {                 
            col.width = length;
          }
        } else {
          columns.push({
            Name : key,
            Width : value.toString().length
          })
        }        
      }
    }

    return this.convertToPercent(columns);
  }

  private convertToPercent(columns) {
    const sum = this.getSum(columns);
    for (const col of columns) {
      col.Width = col.Width/sum * 100;
    }
    return columns;
  }

  private getSum (columns) {
    let sum = 0;
    for (const col of columns) {
      sum += col.Width;
    }
    return sum;
  }

}
