import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkItemInputComponent } from './work-item-input.component';

describe('WorkItemInputComponent', () => {
  let component: WorkItemInputComponent;
  let fixture: ComponentFixture<WorkItemInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkItemInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkItemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
