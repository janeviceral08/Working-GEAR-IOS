import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalbackgroundPage } from './personalbackground.page';

describe('PersonalbackgroundPage', () => {
  let component: PersonalbackgroundPage;
  let fixture: ComponentFixture<PersonalbackgroundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalbackgroundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalbackgroundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
