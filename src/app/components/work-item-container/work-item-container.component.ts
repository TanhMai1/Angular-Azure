import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkItem } from 'src/app/Models/work-item';
import { AzureDevOpsService } from '../../services/azure-devops.service';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item-container.component.html',
  styleUrls: ['./work-item-container.component.css']
})
export class WorkItemContainerComponent {
  workItemResults$ = new Observable<WorkItem>();
  constructor(private azureDevOpsService: AzureDevOpsService) {
  }
  getAzureWorkItem(workItemId: number): void {
    this.workItemResults$ = this.azureDevOpsService.getWorkItem(workItemId);
  }
}
