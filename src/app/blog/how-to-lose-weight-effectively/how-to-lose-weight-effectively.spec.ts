import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToLoseWeightEffectively } from './how-to-lose-weight-effectively';

describe('HowToLoseWeightEffectively', () => {
  let component: HowToLoseWeightEffectively;
  let fixture: ComponentFixture<HowToLoseWeightEffectively>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToLoseWeightEffectively]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToLoseWeightEffectively);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
