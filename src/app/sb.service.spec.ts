import { TestBed } from '@angular/core/testing';

import { SBService } from './sb.service';

describe('SBService', () => {
  let service: SBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
