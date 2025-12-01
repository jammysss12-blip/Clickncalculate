import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorLoan } from './calculator-loan';

describe('CalculatorLoan', () => {
  let component: CalculatorLoan;
  let fixture: ComponentFixture<CalculatorLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorLoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
