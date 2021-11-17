import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDosPanelComponent } from './to-dos-panel.component';

describe('ToDosPanelComponent', () => {
  let component: ToDosPanelComponent;
  let fixture: ComponentFixture<ToDosPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDosPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
