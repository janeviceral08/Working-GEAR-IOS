import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalbackgroundupdatePage } from './personalbackgroundupdate.page';

describe('PersonalbackgroundupdatePage', () => {
  let component: PersonalbackgroundupdatePage;
  let fixture: ComponentFixture<PersonalbackgroundupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalbackgroundupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalbackgroundupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
