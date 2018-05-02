import { TestBed, inject } from '@angular/core/testing';

import { LoginQueryServiceService } from './login-query-service.service';

describe('LoginQueryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginQueryServiceService]
    });
  });

  it('should be created', inject([LoginQueryServiceService], (service: LoginQueryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
