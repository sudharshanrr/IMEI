import { TestBed } from '@angular/core/testing';

import { DownloadXlsService } from './download-xls.service';

describe('DownloadXlsService', () => {
  let service: DownloadXlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadXlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
