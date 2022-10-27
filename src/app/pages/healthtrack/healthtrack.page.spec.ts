import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthtrackPage } from './healthtrack.page';

describe('HealthtrackPage', () => {
  let component: HealthtrackPage;
  let fixture: ComponentFixture<HealthtrackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthtrackPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthtrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
