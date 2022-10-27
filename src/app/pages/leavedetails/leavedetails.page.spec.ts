import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavedetailsPage } from './leavedetails.page';

describe('LeavedetailsPage', () => {
  let component: LeavedetailsPage;
  let fixture: ComponentFixture<LeavedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavedetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
