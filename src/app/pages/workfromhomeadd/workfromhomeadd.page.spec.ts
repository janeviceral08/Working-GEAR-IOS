import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkfromhomeaddPage } from './workfromhomeadd.page';

describe('WorkfromhomeaddPage', () => {
  let component: WorkfromhomeaddPage;
  let fixture: ComponentFixture<WorkfromhomeaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkfromhomeaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkfromhomeaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
