import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCalculators } from './our-calculators';

describe('OurCalculators', () => {
  let component: OurCalculators;
  let fixture: ComponentFixture<OurCalculators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCalculators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCalculators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
