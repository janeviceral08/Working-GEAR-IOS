import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorylistPage } from './advisorylist.page';

describe('AdvisorylistPage', () => {
  let component: AdvisorylistPage;
  let fixture: ComponentFixture<AdvisorylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorylistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
