import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const ratingMock: BookRatingService = {
      rateUp: (b: Book) => b,
      rateDown: (b: Book) => b,
      MIN: 1,
      MAX: 5,
    };

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: BookRatingService, useValue: ratingMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.rateUp on doRateUp', () => {
    const service = TestBed.inject(BookRatingService);
    const book = { isbn: '123' } as Book; // Type Assertion
    spyOn(service, 'rateUp').and.callThrough();
    component.doRateUp(book);
    expect(service.rateUp).toHaveBeenCalledWith(book);
  });
});
