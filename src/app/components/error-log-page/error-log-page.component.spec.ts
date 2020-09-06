import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLogPageComponent } from './error-log-page.component';

describe('ErrorLogPageComponent', () => {
  let component: ErrorLogPageComponent;
  let fixture: ComponentFixture<ErrorLogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorLogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
