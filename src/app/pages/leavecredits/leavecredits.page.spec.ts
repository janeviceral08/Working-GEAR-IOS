import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavecreditsPage } from './leavecredits.page';

describe('LeavecreditsPage', () => {
  let component: LeavecreditsPage;
  let fixture: ComponentFixture<LeavecreditsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavecreditsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavecreditsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
