import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalinformationPage } from './personalinformation.page';

describe('PersonalinformationPage', () => {
  let component: PersonalinformationPage;
  let fixture: ComponentFixture<PersonalinformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalinformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalinformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
