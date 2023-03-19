import { TestBed } from '@angular/core/testing';

import { SupabaseProfilesService } from './supabase.profiles.service';

describe('SupabaseService', () => {
  let service: SupabaseProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
