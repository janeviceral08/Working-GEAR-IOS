import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansdetailsPage } from './loansdetails.page';

describe('LoansdetailsPage', () => {
  let component: LoansdetailsPage;
  let fixture: ComponentFixture<LoansdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
