import { TestBed } from '@angular/core/testing';

import { AzureDevopsHttpService } from './azure-devops-http.service';

describe('AzureDevopsHttpService', () => {
  let service: AzureDevopsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureDevopsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
