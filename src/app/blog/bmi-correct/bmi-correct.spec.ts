import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCorrect } from './bmi-correct';

describe('BmiCorrect', () => {
  let component: BmiCorrect;
  let fixture: ComponentFixture<BmiCorrect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiCorrect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCorrect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
