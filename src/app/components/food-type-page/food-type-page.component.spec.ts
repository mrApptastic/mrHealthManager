import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTypePageComponent } from './food-type-page.component';

describe('FoodTypePageComponent', () => {
  let component: FoodTypePageComponent;
  let fixture: ComponentFixture<FoodTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodTypePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
