/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VendorMovieListPageComponent } from './vendor-movie-list-page.component';

describe('VendorMovieListPageComponent', () => {
  let component: VendorMovieListPageComponent;
  let fixture: ComponentFixture<VendorMovieListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorMovieListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorMovieListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
