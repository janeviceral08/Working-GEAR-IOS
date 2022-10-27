import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesthealthtrackPage } from './guesthealthtrack.page';

describe('GuesthealthtrackPage', () => {
  let component: GuesthealthtrackPage;
  let fixture: ComponentFixture<GuesthealthtrackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuesthealthtrackPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuesthealthtrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
