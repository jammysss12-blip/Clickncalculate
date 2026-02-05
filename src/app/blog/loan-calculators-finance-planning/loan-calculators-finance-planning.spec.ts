import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCalculatorsFinancePlanning } from './loan-calculators-finance-planning';

describe('LoanCalculatorsFinancePlanning', () => {
  let component: LoanCalculatorsFinancePlanning;
  let fixture: ComponentFixture<LoanCalculatorsFinancePlanning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanCalculatorsFinancePlanning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanCalculatorsFinancePlanning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
