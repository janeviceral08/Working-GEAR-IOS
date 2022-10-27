import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryaddPage } from './advisoryadd.page';

describe('AdvisoryaddPage', () => {
  let component: AdvisoryaddPage;
  let fixture: ComponentFixture<AdvisoryaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisoryaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
