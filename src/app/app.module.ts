import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiPipe } from './pipes/bmi.pipe';
import { BmrPipe } from './pipes/bmr.pipe';
import { AgePipe } from './pipes/age.pipe';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ErrorService } from './services/error.service';
import { InterceptorService } from './services/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicTableComponent } from './components/basic-table/basic-table.component';
import { SortPipe } from './pipes/sort.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { ActivityPageComponent } from './components/activity-page/activity-page.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { PlanningPageComponent } from './components/planning-page/planning-page.component';
import { PersonPageComponent } from './components/person-page/person-page.component';
import { PlanningOverviewPageComponent } from './components/planning-overview-page/planning-overview-page.component';
import { AbstractInputComponent } from './components/abstract-input/abstract-input.component';
import { AbstractModelComponent } from './components/abstract-input/abstract-model.component';
import { InputComponent } from './components/input/input.component';
import { PersonOverviewPageComponent } from './components/person-overview-page/person-overview-page.component';
import { ErrorLogOverviewPageComponent } from './components/error-log-overview-page/error-log-overview-page.component';
import { ErrorLogPageComponent } from './components/error-log-page/error-log-page.component';
import { LogoComponent } from './components/logo/logo.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FoodTypePageComponent } from './components/food-type-page/food-type-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiPipe,
    BmrPipe,
    AgePipe,
    MainPageComponent,
    ErrorPageComponent,
    BasicTableComponent,
    SortPipe,
    SearchPipe,
    ActivityPageComponent,
    FoodPageComponent,
    PlanningPageComponent,
    PersonPageComponent,
    PlanningOverviewPageComponent,
    AbstractInputComponent,
    AbstractModelComponent,
    InputComponent,
    PersonOverviewPageComponent,
    ErrorLogOverviewPageComponent,
    ErrorLogPageComponent,
    LogoComponent,
    SpinnerComponent,
    FoodTypePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorService},
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
