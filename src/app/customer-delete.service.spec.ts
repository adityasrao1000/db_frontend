import { TestBed, inject } from '@angular/core/testing';

import { CustomerDeleteService } from './customer-delete.service';

describe('CustomerDeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerDeleteService]
    });
  });

  it('should be created', inject([CustomerDeleteService], (service: CustomerDeleteService) => {
    expect(service).toBeTruthy();
  }));
});
