import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingappointmentsComponent } from './upcommingappointments.component';

describe('UpcommingappointmentsComponent', () => {
  let component: UpcommingappointmentsComponent;
  let fixture: ComponentFixture<UpcommingappointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcommingappointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcommingappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
