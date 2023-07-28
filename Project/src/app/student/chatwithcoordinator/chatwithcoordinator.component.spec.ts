import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatwithcoordinatorComponent } from './chatwithcoordinator.component';

describe('ChatwithcoordinatorComponent', () => {
  let component: ChatwithcoordinatorComponent;
  let fixture: ComponentFixture<ChatwithcoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatwithcoordinatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatwithcoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
