import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineaddPage } from './vaccineadd.page';

describe('VaccineaddPage', () => {
  let component: VaccineaddPage;
  let fixture: ComponentFixture<VaccineaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
