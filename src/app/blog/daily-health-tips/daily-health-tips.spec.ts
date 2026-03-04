import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyHealthTips } from './daily-health-tips';

describe('DailyHealthTips', () => {
  let component: DailyHealthTips;
  let fixture: ComponentFixture<DailyHealthTips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyHealthTips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyHealthTips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
