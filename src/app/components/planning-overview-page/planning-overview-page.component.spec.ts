import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningOverviewPageComponent } from './planning-overview-page.component';

describe('PlanningOverviewPageComponent', () => {
  let component: PlanningOverviewPageComponent;
  let fixture: ComponentFixture<PlanningOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
