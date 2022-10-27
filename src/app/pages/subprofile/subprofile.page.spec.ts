import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubprofilePage } from './subprofile.page';

describe('SubprofilePage', () => {
  let component: SubprofilePage;
  let fixture: ComponentFixture<SubprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
