import { TestBed } from '@angular/core/testing';

import { AgainstUnAuthedGuardGuard } from './against-un-authed-guard.guard';

describe('AgainstUnAuthedGuardGuard', () => {
  let guard: AgainstUnAuthedGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AgainstUnAuthedGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
