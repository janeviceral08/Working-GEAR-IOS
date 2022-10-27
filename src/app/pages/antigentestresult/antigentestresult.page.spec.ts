import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntigentestresultPage } from './antigentestresult.page';

describe('AntigentestresultPage', () => {
  let component: AntigentestresultPage;
  let fixture: ComponentFixture<AntigentestresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntigentestresultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntigentestresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
