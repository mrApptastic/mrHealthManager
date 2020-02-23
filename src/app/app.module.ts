import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    BmiPipe,
    BmrPipe,
    AgePipe,
    MainPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorService},
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
