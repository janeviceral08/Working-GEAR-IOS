import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpayslipforgotpassPage } from './epayslipforgotpass.page';

describe('EpayslipforgotpassPage', () => {
  let component: EpayslipforgotpassPage;
  let fixture: ComponentFixture<EpayslipforgotpassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpayslipforgotpassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpayslipforgotpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
