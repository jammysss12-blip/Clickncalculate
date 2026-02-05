import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCalculatorsForStudents } from './online-calculators-for-students';

describe('OnlineCalculatorsForStudents', () => {
  let component: OnlineCalculatorsForStudents;
  let fixture: ComponentFixture<OnlineCalculatorsForStudents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineCalculatorsForStudents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineCalculatorsForStudents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
