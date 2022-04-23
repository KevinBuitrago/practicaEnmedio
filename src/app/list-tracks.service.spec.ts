import { TestBed } from '@angular/core/testing';

import { ListTracksService } from './list-tracks.service';

describe('ListTracksService', () => {
  let service: ListTracksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTracksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
