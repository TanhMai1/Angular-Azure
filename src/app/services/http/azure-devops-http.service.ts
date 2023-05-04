import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WorkItemHttpResponse } from 'src/app/Models/work-item-response';

@Injectable({
  providedIn: 'root'
})
export class AzureDevopsHttpService {

  constructor(private http: HttpClient) { }

  getWorkItemHttp(workItemId: number): Observable<WorkItemHttpResponse> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(':' + environment.pat)
    });

    const url = `${environment.apiUrl}/${workItemId}?${environment.apiVersion}`;
    return this.http.get<WorkItemHttpResponse>(url, { headers }).pipe(tap(response=>console.log('response', response)));
  }

}

