import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLogOverviewPageComponent } from './error-log-overview-page.component';

describe('ErrorLogOverviewPageComponent', () => {
  let component: ErrorLogOverviewPageComponent;
  let fixture: ComponentFixture<ErrorLogOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorLogOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLogOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
