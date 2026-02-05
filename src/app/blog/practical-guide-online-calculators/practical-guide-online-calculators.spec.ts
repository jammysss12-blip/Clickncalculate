import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalGuideOnlineCalculators } from './practical-guide-online-calculators';

describe('PracticalGuideOnlineCalculators', () => {
  let component: PracticalGuideOnlineCalculators;
  let fixture: ComponentFixture<PracticalGuideOnlineCalculators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticalGuideOnlineCalculators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticalGuideOnlineCalculators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
