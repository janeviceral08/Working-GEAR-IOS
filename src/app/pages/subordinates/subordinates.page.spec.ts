import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordinatesPage } from './subordinates.page';

describe('SubordinatesPage', () => {
  let component: SubordinatesPage;
  let fixture: ComponentFixture<SubordinatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubordinatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubordinatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
