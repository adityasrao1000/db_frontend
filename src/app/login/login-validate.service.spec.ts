import { TestBed, inject } from '@angular/core/testing';

import { LoginValidateService } from './login-validate.service';

describe('LoginValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginValidateService]
    });
  });

  it('should be created', inject([LoginValidateService], (service: LoginValidateService) => {
    expect(service).toBeTruthy();
  }));
});
