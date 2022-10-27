import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCalendarPage } from './filter-calendar.page';

describe('FilterCalendarPage', () => {
  let component: FilterCalendarPage;
  let fixture: ComponentFixture<FilterCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCalendarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
