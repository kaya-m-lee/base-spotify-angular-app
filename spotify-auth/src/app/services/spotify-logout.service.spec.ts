import { TestBed } from '@angular/core/testing';

import { SpotifyLogoutService } from './spotify-logout.service';

describe('SpotifyLogoutService', () => {
  let service: SpotifyLogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyLogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
