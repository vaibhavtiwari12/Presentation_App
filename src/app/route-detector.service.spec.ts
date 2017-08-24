import { TestBed, inject } from '@angular/core/testing';

import { RouteDetectorService } from './route-detector.service';

describe('RouteDetectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteDetectorService]
    });
  });

  it('should be created', inject([RouteDetectorService], (service: RouteDetectorService) => {
    expect(service).toBeTruthy();
  }));
});
