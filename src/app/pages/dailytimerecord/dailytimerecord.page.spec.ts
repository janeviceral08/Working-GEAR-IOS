import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytimerecordPage } from './dailytimerecord.page';

describe('DailytimerecordPage', () => {
  let component: DailytimerecordPage;
  let fixture: ComponentFixture<DailytimerecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailytimerecordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailytimerecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
