import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimeapprovalPage } from './overtimeapproval.page';

describe('OvertimeapprovalPage', () => {
  let component: OvertimeapprovalPage;
  let fixture: ComponentFixture<OvertimeapprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvertimeapprovalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertimeapprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
