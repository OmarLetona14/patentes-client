import { TestBed } from '@angular/core/testing';

import { ProfesioalService } from './profesioal.service';

describe('ProfesioalService', () => {
  let service: ProfesioalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesioalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
