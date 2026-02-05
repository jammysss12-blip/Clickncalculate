import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteCalculatorGuide } from './concrete-calculator-guide';

describe('ConcreteCalculatorGuide', () => {
  let component: ConcreteCalculatorGuide;
  let fixture: ComponentFixture<ConcreteCalculatorGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcreteCalculatorGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcreteCalculatorGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
