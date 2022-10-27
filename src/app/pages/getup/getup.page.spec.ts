import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetupPage } from './getup.page';

describe('GetupPage', () => {
  let component: GetupPage;
  let fixture: ComponentFixture<GetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
