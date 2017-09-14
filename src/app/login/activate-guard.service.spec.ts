import { TestBed, inject } from '@angular/core/testing';

import { ActivateGuardService } from './activate-guard.service';

describe('ActivateGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateGuardService]
    });
  });

  it('should be created', inject([ActivateGuardService], (service: ActivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
