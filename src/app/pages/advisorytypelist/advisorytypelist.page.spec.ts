import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorytypelistPage } from './advisorytypelist.page';

describe('AdvisorytypelistPage', () => {
  let component: AdvisorytypelistPage;
  let fixture: ComponentFixture<AdvisorytypelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorytypelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorytypelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
