import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrequestsComponent } from './studentrequests.component';

describe('StudentrequestsComponent', () => {
  let component: StudentrequestsComponent;
  let fixture: ComponentFixture<StudentrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentrequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
