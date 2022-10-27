import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveaddPage } from './leaveadd.page';

describe('LeaveaddPage', () => {
  let component: LeaveaddPage;
  let fixture: ComponentFixture<LeaveaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
