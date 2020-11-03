import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOverviewPageComponent } from './food-overview-page.component';

describe('FoodOverviewPageComponent', () => {
  let component: FoodOverviewPageComponent;
  let fixture: ComponentFixture<FoodOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
