import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ErrorService } from './services/error.service';
import { InterceptorService } from './services/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicTableComponent } from './components/basic-table/basic-table.component';
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
import { FoodOverviewPageComponent } from './components/food-overview-page/food-overview-page.component';
import { MrMr2Module } from 'mr-mr2';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ErrorPageComponent,
    BasicTableComponent,
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
    FoodTypePageComponent,
    FoodOverviewPageComponent,
    MessageBoxComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MrMr2Module
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorService},
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
