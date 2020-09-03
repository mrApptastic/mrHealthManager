import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PlanningPageComponent } from './components/planning-page/planning-page.component';
import { ActivityPageComponent } from './components/activity-page/activity-page.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { PersonPageComponent } from './components/person-page/person-page.component';
import { PlanningOverviewPageComponent } from './components/planning-overview-page/planning-overview-page.component';

const routes: Routes = [
  {
    path: '',
    component : MainPageComponent,
    pathMatch : 'full'
  },
  {
    path: 'Home',
    component : MainPageComponent
  },
  {
    path: 'Person/:Id',
    component : PersonPageComponent
  },
  {
    path: 'Planning',
    component : PlanningOverviewPageComponent
  },
  {
    path: 'Planning/:Id',
    component : PlanningPageComponent
  },
  {
    path: 'Activities',
    component : ActivityPageComponent
  },
  {
    path: 'Food',
    component : FoodPageComponent
  },
  {
    path: '**',
    component : ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
