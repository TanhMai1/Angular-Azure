import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkItemsResultsComponent } from './work-items-results.component';

describe('WorkItemsResultsComponent', () => {
  let component: WorkItemsResultsComponent;
  let fixture: ComponentFixture<WorkItemsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkItemsResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkItemsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
