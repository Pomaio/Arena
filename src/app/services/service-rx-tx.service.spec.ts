import { TestBed } from '@angular/core/testing';

import { ServiceRxTxService } from './service-rx-tx.service';

describe('ServiceRxTxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceRxTxService = TestBed.get(ServiceRxTxService);
    expect(service).toBeTruthy();
  });
});
