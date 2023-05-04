import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WorkItem } from '../Models/work-item';
import { AzureDevopsHttpService } from './http/azure-devops-http.service';
import { state } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})
export class AzureDevOpsService {

  constructor(private azureDevOpsServiceHttp: AzureDevopsHttpService) { }

  getWorkItem(workItemId: number): Observable<WorkItem> {
      return this.azureDevOpsServiceHttp.getWorkItemHttp(workItemId).pipe(map(
        response => {
          return <WorkItem>{
            areaPath:  response.fields['System.AreaPath'],
            reason: response.fields['System.Reason'],
            state: response.fields['System.State'],
            title: response.fields['System.Title'],
            devState: response.fields['Custom.StateDaysDevelopment'],
            codeReview: response.fields['Custom.StateDaysCodeReview'],
            stageState: response.fields['Custom.StateDaysDeployedToStage']


          };
        }
      ))
  }
}
