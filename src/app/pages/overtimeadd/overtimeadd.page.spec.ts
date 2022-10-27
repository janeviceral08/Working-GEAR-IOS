import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimeaddPage } from './overtimeadd.page';

describe('OvertimeaddPage', () => {
  let component: OvertimeaddPage;
  let fixture: ComponentFixture<OvertimeaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvertimeaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertimeaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
