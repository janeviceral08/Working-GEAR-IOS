import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimesearchPage } from './overtimesearch.page';

describe('OvertimesearchPage', () => {
  let component: OvertimesearchPage;
  let fixture: ComponentFixture<OvertimesearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvertimesearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertimesearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
