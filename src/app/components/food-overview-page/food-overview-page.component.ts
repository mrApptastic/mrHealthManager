import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/models/food';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-food-overview-page',
  templateUrl: './food-overview-page.component.html',
  styleUrls: ['./food-overview-page.component.scss']
})
export class FoodOverviewPageComponent implements OnInit {
  dataSource: any[];
  constructor(private router: Router, private data: DataService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.reloadData();
    }, 0);
  }

  update($event): void {
    const f = $event as Food;
    this.router.navigateByUrl('/Food/' + f.Id);
  }

  addFood(): void {
    this.data.setSingleFood({
      Id: 0,
      Name: "",
      Calories: 0,
      Calcium: 0,
      Carbohydrates: 0,
      Proteins: 0,
      Fat: 0,
      Fibres: 0,
      Alcohol: 0,
      TypeId : 1

    });
    this.reloadData();
  }

  reloadData(): void {
    setTimeout(() => {
      this.dataSource = this.data.getFood();
    }, 0);
  }
}
