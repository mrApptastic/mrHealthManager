import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-food-type-page',
  templateUrl: './food-type-page.component.html',
  styleUrls: ['./food-type-page.component.scss']
})
export class FoodTypePageComponent implements OnInit {
  dataSource: any[];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  update($event): void {
    this.data.setFoodType($event);
  }

  addFoodType(): void {
    this.data.setFoodType({
      Id: 0,
      Type : ""
    });
    this.reloadData();
  }

  reloadData(): void {
    setTimeout(() => {
      this.dataSource = this.data.getFoodTypes();
    }, 0);
  }
}
