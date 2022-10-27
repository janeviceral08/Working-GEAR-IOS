import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGuestHealthttrackPage } from './menu-guest-healthttrack.page';

describe('MenuGuestHealthttrackPage', () => {
  let component: MenuGuestHealthttrackPage;
  let fixture: ComponentFixture<MenuGuestHealthttrackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGuestHealthttrackPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGuestHealthttrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
