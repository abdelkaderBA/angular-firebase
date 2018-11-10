/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyskillComponent } from './myskill.component';

describe('MyskillComponent', () => {
  let component: MyskillComponent;
  let fixture: ComponentFixture<MyskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
