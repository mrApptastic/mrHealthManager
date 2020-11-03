import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food';
import { FoodType } from 'src/app/models/food-type';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  id: number;
  food: Food;
  types: FoodType[];
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.types = this.data.getFoodTypes();
    this.id = parseInt(this.route.snapshot.paramMap.get('Id'), 10);
    this.food = this.data.getSingleFood(this.id);

  }

  update(food: Food) {
    this.data.setSingleFood(food);
  }

  updateType(value) {
    this.food.TypeId = value;
    this.update(this.food);
  }
}
