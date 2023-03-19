import { TestBed } from '@angular/core/testing';

import { SupabasePostsService } from './supabase.posts.service';

describe('SupabasePostsService', () => {
  let service: SupabasePostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabasePostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
