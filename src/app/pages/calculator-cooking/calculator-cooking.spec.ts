import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorCooking } from './calculator-cooking';

describe('CalculatorCooking', () => {
  let component: CalculatorCooking;
  let fixture: ComponentFixture<CalculatorCooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorCooking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorCooking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
