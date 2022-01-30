import { TestBed } from '@angular/core/testing';

import { PrisingServiceService } from './prising-service.service';

describe('PrisingServiceService', () => {
  let service: PrisingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrisingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
