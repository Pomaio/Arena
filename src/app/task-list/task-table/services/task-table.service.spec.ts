import { TestBed } from '@angular/core/testing';

import { TaskTableService } from './task-table.service';

describe('TaskTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskTableService = TestBed.get(TaskTableService);
    expect(service).toBeTruthy();
  });
});
