/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VendorMovieListItemComponent } from './vendor-movie-list-item.component';

describe('VendorMovieListItemComponent', () => {
  let component: VendorMovieListItemComponent;
  let fixture: ComponentFixture<VendorMovieListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorMovieListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorMovieListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
