import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutApi } from './put-api';

describe('PutApi', () => {
  let component: PutApi;
  let fixture: ComponentFixture<PutApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutApi],
    }).compileComponents();

    fixture = TestBed.createComponent(PutApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
