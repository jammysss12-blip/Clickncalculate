import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestFreeOnlineCalculators2026 } from './best-free-online-calculators-2026';

describe('BestFreeOnlineCalculators2026', () => {
  let component: BestFreeOnlineCalculators2026;
  let fixture: ComponentFixture<BestFreeOnlineCalculators2026>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestFreeOnlineCalculators2026]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestFreeOnlineCalculators2026);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
