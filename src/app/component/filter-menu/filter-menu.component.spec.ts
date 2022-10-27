import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMenuPage } from './filter-menu.page';

describe('FilterMenuPage', () => {
  let component: FilterMenuPage;
  let fixture: ComponentFixture<FilterMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
