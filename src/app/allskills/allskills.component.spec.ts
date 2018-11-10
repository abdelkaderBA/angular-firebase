/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllskillsComponent } from './allskills.component';

describe('AllskillsComponent', () => {
  let component: AllskillsComponent;
  let fixture: ComponentFixture<AllskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
