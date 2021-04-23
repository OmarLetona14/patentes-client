import { TestBed } from '@angular/core/testing';

import { Consulta2Service } from './consulta2.service';

describe('Consulta2Service', () => {
  let service: Consulta2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Consulta2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
