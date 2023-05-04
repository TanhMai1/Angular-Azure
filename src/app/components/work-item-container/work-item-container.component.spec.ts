import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkItemContainerComponent } from './work-item-container.component';

describe('WorkItemContainerComponent', () => {
  let component: WorkItemContainerComponent;
  let fixture: ComponentFixture<WorkItemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkItemContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
