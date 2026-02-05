import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowLoanEmiWorks } from './how-loan-emi-works';

describe('HowLoanEmiWorks', () => {
  let component: HowLoanEmiWorks;
  let fixture: ComponentFixture<HowLoanEmiWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowLoanEmiWorks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowLoanEmiWorks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
