import { TestBed } from '@angular/core/testing';
import { REviewService } from './review-service';

describe('REviewService', () => {
  let service: REviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(REviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
