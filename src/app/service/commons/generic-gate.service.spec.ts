import { TestBed, inject } from '@angular/core/testing';

import { GenericGateServiceService } from './generic-gate-service.service';

describe('GenericGateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenericGateServiceService]
    });
  });

  it('should be created', inject([GenericGateServiceService], (service: GenericGateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
