import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryapprovalPage } from './advisoryapproval.page';

describe('AdvisoryapprovalPage', () => {
  let component: AdvisoryapprovalPage;
  let fixture: ComponentFixture<AdvisoryapprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisoryapprovalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryapprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
