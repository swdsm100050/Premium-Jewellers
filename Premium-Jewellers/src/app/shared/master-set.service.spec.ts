import { TestBed } from '@angular/core/testing';

import { MasterSetService } from './master-set.service';

describe('MasterSetService', () => {
  let service: MasterSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
