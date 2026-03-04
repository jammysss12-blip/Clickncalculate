import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePercentageGuide } from './calculate-percentage-guide';

describe('CalculatePercentageGuide', () => {
  let component: CalculatePercentageGuide;
  let fixture: ComponentFixture<CalculatePercentageGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatePercentageGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatePercentageGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
