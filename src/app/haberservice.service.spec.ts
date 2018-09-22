import { TestBed } from '@angular/core/testing';

import { HaberserviceService } from './haberservice.service';

describe('HaberserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HaberserviceService = TestBed.get(HaberserviceService);
    expect(service).toBeTruthy();
  });
});
