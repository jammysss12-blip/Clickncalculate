import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorWords } from './calculator-words';

describe('CalculatorWords', () => {
  let component: CalculatorWords;
  let fixture: ComponentFixture<CalculatorWords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorWords]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorWords);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
