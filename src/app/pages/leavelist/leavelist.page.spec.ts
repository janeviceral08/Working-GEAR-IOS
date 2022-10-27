import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavelistPage } from './leavelist.page';

describe('LeavelistPage', () => {
  let component: LeavelistPage;
  let fixture: ComponentFixture<LeavelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
