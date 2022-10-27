import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltermenuPage } from './filtermenu.page';

describe('FiltermenuPage', () => {
  let component: FiltermenuPage;
  let fixture: ComponentFixture<FiltermenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltermenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltermenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
