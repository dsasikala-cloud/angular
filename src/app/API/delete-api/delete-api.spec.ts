import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteApi } from './delete-api';

describe('DeleteApi', () => {
  let component: DeleteApi;
  let fixture: ComponentFixture<DeleteApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteApi],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
