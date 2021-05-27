import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from "rxjs";
import { debounceTime } from 'rxjs/operators';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss'],
  providers: [DatePipe, DecimalPipe]
})
export class BasicTableComponent implements OnInit, OnChanges {
  @Input() dataSource: any[];
  @Input() editable: any;
  @Input() spinner: string;
  @Input() spinnerText: string;
  @Output() rowClick = new EventEmitter<any>();
  @Output() dataChange = new EventEmitter<any>();
  searchRequest = new Subject<string>();
  editAll: boolean;
  sortOrder: string;
  sortDirection: boolean;
  searchField: string;
  columns: any[];
  searchFilter = "";

  constructor(private datePipe: DatePipe,
              private numberPipe: DecimalPipe) {
                this.searchRequest
                .pipe(
                  debounceTime(500))
                .subscribe(() => {
                  this.searchFilter = this.searchField;
                });
              }

  ngOnInit(): void {
    if (!this.spinnerText) {
      this.spinnerText = "Loading data...";
    }

    this.loadData();
  }

  ngOnChanges(): void {
    this.loadData();
  }

  handleSearch(): void {
    this.searchRequest.next();
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

  public readyForActionFilter(row: any, col: any) {
    let returnValue = row[col];

    /* Handle Special Cases */
    if(col.toString().toLowerCase() === "gender") {
      returnValue = returnValue.toString().toLowerCase() === "true" ? "Female" : "Male";
    } else if (col.toString().toLowerCase() === "dateofbirth") {
      returnValue =  this.datePipe.transform(returnValue, "dd/MM yyyy");
    } else if (col.toString().toLowerCase() === "time") {
      returnValue =  this.datePipe.transform(returnValue, "dd/MM yyyy HH:mm");
    } else if (col.toString().toLowerCase() === "calories" ||
              col.toString().toLowerCase() === "proteins" ||
              col.toString().toLowerCase() === "fat" ||
              col.toString().toLowerCase() === "carbohydrates" ||
              col.toString().toLowerCase() === "fibres" ||
              col.toString().toLowerCase() === "calcium" ||
              col.toString().toLowerCase() === "kcal" ||
              col.toString().toLowerCase() === "alcohol") {
      returnValue =  this.numberPipe.transform(returnValue);
    }

    return returnValue;
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
          if (!Array.isArray(value) &&
          (key.toString().toLowerCase() !== "id" &&
           key.toString().toLowerCase() !== "typeid")) {
            columns.push({
              Name: key,
              Width: key.toString().length > value.toString().length ? key.toString().length : value.toString().length,
              Input: this.editAll && key.toString().toLowerCase() !== 'id' ?
                    (typeof(value) === 'number' ? 'number' :
                    typeof(value) === 'boolean' ? 'checkbox' : 'text') : null,
              Position: (typeof(value) === 'number' ? 'right' : (typeof(value) === 'string' ? 'left' : 'center' ))
            });
          }
        }
      }
    }

    return this.convertToPercent(columns);
  }

  private convertToPercent(columns: any) {
    const sum = this.getSum(columns);
    for (const col of columns) {
      Math.floor(col.Width = col.Width / sum * 100);
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
