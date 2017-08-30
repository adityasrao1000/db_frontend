import { TestBed, inject } from '@angular/core/testing';

import { CustomerUpdateService } from './customer-update.service';

describe('CustomerUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerUpdateService]
    });
  });

  it('should be created', inject([CustomerUpdateService], (service: CustomerUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
