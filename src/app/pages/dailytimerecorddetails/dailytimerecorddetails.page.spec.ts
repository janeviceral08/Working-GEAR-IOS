import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytimerecorddetailsPage } from './dailytimerecorddetails.page';

describe('DailytimerecorddetailsPage', () => {
  let component: DailytimerecorddetailsPage;
  let fixture: ComponentFixture<DailytimerecorddetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailytimerecorddetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailytimerecorddetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
