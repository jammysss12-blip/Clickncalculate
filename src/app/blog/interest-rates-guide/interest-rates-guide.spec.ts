import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRatesGuide } from './interest-rates-guide';

describe('InterestRatesGuide', () => {
  let component: InterestRatesGuide;
  let fixture: ComponentFixture<InterestRatesGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestRatesGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestRatesGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
