import {TestBed, inject} from '@angular/core/testing';

import {LoginQueryService} from './login-query.service';

describe('LoginQueryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginQueryService]
    });
  });

  it('should be created', inject([LoginQueryService], (service: LoginQueryService) => {
    expect(service).toBeTruthy();
  }));
});
