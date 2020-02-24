import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit, OnChanges {
  @Input() dataSource: any[];
  @Input() editable: any;
  @Output() rowClick = new EventEmitter<any>();
  @Output() dataChange = new EventEmitter<any>();
  editAll: boolean;
  sortOrder: string;
  sortDirection: boolean;
  searchFilter: string;


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
      this.editAll = this.editable.toString() === 'true';
      this.columns = this.getColumns(this.dataSource);
      this.sortOrder = this.columns.length > 0 ? this.columns[0].Name : '';
      this.sortDirection = false;
      this.searchFilter = '';
    }
  }

  onRowClick(obj: any) {
    this.rowClick.emit(obj);
  }

  onDataChange(obj: any) {
    this.dataChange.emit(obj);
  }

  private getColumns(data: any[]) {
    const columns = new Array();

    for (const row of data) {
      for (const [key, value] of Object.entries(row) ) {
        if (columns.some(x => x.Name === key)) {
          const length = value.toString().length;
          const col = columns.find(x => x.Name === key);
          if (length > col.Width) {
            col.width = length;
          }
        } else {
          columns.push({
            Name: key,
            Width: key.toString().length > value.toString().length ? key.toString().length : value.toString().length,
            Input: this.editAll ? (typeof(value) === 'number' ? 'number' : typeof(value) === 'boolean' ? 'checkbox' : 'text') : null,
            Position: (typeof(value) === 'number' ? 'right' : (typeof(value) === 'string' ? 'left' : 'center' ))
          });
        }
      }
    }

    return this.convertToPercent(columns);
  }

  private convertToPercent(columns: any) {
    const sum = this.getSum(columns);
    for (const col of columns) {
      col.Width = col.Width / sum * 100;
    }
    return columns;
  }

  private getSum(columns: any) {
    let sum = 0;
    for (const col of columns) {
      sum += col.Width;
    }
    return sum;
  }

}
