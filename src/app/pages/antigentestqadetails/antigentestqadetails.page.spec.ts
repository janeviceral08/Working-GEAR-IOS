import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntigentestqadetailsPage } from './antigentestqadetails.page';

describe('AntigentestqadetailsPage', () => {
  let component: AntigentestqadetailsPage;
  let fixture: ComponentFixture<AntigentestqadetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntigentestqadetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntigentestqadetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
