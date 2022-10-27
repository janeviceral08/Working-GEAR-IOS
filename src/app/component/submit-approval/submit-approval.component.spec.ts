import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitApprovalPage } from './submit-approval.page';

describe('SubmitApprovalPage', () => {
  let component: SubmitApprovalPage;
  let fixture: ComponentFixture<SubmitApprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitApprovalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitApprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
