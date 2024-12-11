/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VendorMovieListComponent } from './vendor-movie-list.component';

describe('VendorMovieListComponent', () => {
  let component: VendorMovieListComponent;
  let fixture: ComponentFixture<VendorMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
