import { TestBed } from '@angular/core/testing';

import { TableFieldsService } from './table-fields.service';

describe('TableFieldsService', () => {
  let service: TableFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
