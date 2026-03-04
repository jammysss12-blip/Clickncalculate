import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConverterGuide } from './unit-converter-guide';

describe('UnitConverterGuide', () => {
  let component: UnitConverterGuide;
  let fixture: ComponentFixture<UnitConverterGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitConverterGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitConverterGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
