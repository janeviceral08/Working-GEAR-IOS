import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinehistoryPage } from './vaccinehistory.page';

describe('VaccinehistoryPage', () => {
  let component: VaccinehistoryPage;
  let fixture: ComponentFixture<VaccinehistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinehistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinehistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
