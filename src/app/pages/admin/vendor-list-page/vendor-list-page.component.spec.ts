/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VendorListPageComponent } from './vendor-list-page.component';

describe('VendorListPageComponent', () => {
  let component: VendorListPageComponent;
  let fixture: ComponentFixture<VendorListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
