import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorConcrete } from './calculator-concrete';

describe('CalculatorConcrete', () => {
  let component: CalculatorConcrete;
  let fixture: ComponentFixture<CalculatorConcrete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorConcrete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorConcrete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
