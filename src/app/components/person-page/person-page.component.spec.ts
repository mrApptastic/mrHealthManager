import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AgePipe } from '../../pipes/age.pipe';
import { BmiPipe } from '../../pipes/bmi.pipe';
import { BmrPipe } from '../../pipes/bmr.pipe';
import { PersonPageComponent } from './person-page.component';

describe('PersonPageComponent', () => {
  let component: PersonPageComponent;
  let fixture: ComponentFixture<PersonPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, RouterModule.forRoot([])],
      declarations: [ PersonPageComponent, AgePipe, BmiPipe, BmrPipe ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
