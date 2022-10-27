import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntigentesthistoryPage } from './antigentesthistory.page';

describe('AntigentesthistoryPage', () => {
  let component: AntigentesthistoryPage;
  let fixture: ComponentFixture<AntigentesthistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntigentesthistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntigentesthistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
