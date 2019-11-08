import { TestBed } from '@angular/core/testing';

import { PlayerStateService } from './player-state.service';

describe('PlayerStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerStateService = TestBed.get(PlayerStateService);
    expect(service).toBeTruthy();
  });
});
