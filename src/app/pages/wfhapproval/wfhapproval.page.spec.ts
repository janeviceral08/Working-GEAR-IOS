import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfhapprovalPage } from './wfhapproval.page';

describe('WfhapprovalPage', () => {
  let component: WfhapprovalPage;
  let fixture: ComponentFixture<WfhapprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfhapprovalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfhapprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
