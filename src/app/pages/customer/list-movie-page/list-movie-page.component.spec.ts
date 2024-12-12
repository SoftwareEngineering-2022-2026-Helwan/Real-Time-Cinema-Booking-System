/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListMoviePageComponent } from './list-movie-page.component';

describe('ListMoviePageComponent', () => {
  let component: ListMoviePageComponent;
  let fixture: ComponentFixture<ListMoviePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoviePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
