import { TestBed } from '@angular/core/testing';

import { InventorService } from './inventor.service';

describe('InventorService', () => {
  let service: InventorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
