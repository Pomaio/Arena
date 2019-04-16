import { TestBed } from '@angular/core/testing';

import { RTServicesService } from './rtservices.service';

describe('RTServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RTServicesService = TestBed.get(RTServicesService);
    expect(service).toBeTruthy();
  });
});
