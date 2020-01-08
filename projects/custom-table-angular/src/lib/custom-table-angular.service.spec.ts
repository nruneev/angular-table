import { TestBed } from '@angular/core/testing';

import { CustomTableAngularService } from './custom-table-angular.service';

describe('CustomTableAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomTableAngularService = TestBed.get(CustomTableAngularService);
    expect(service).toBeTruthy();
  });
});
