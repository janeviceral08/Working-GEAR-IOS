import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntigentestqaapprovalPage } from './antigentestqaapproval.page';

describe('AntigentestqaapprovalPage', () => {
  let component: AntigentestqaapprovalPage;
  let fixture: ComponentFixture<AntigentestqaapprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntigentestqaapprovalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntigentestqaapprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
