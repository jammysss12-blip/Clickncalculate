import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleWaysToSaveMoney } from './simple-ways-to-save-money';

describe('SimpleWaysToSaveMoney', () => {
  let component: SimpleWaysToSaveMoney;
  let fixture: ComponentFixture<SimpleWaysToSaveMoney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleWaysToSaveMoney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleWaysToSaveMoney);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
