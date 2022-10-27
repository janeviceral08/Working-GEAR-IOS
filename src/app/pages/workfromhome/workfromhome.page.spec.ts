import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkfromhomePage } from './workfromhome.page';

describe('WorkfromhomePage', () => {
  let component: WorkfromhomePage;
  let fixture: ComponentFixture<WorkfromhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkfromhomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkfromhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
