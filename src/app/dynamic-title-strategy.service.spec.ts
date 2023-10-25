import { TestBed } from '@angular/core/testing';

import { DynamicTitleStrategyService } from './dynamic-title-strategy.service';

describe('DynamicTitleStrategyService', () => {
  let service: DynamicTitleStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicTitleStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
