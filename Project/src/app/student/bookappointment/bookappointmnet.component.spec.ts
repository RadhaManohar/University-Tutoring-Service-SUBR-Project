import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookappointmnetComponent } from './bookappointmnet.component';

describe('BookappointmnetComponent', () => {
  let component: BookappointmnetComponent;
  let fixture: ComponentFixture<BookappointmnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookappointmnetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookappointmnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
