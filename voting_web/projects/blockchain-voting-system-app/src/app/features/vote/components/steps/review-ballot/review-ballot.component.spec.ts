import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBallotComponent } from './review-ballot.component';

describe('ReviewBallotComponent', () => {
  let component: ReviewBallotComponent;
  let fixture: ComponentFixture<ReviewBallotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewBallotComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewBallotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
