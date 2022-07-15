import { TestBed } from '@angular/core/testing';

import { ServerAPIService } from './serverAPI.service';

describe('ServerAPIService', () => {
  let service: ServerAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
