import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBallotComponent } from './display-ballot.component';

describe('DisplayBallotComponent', () => {
  let component: DisplayBallotComponent;
  let fixture: ComponentFixture<DisplayBallotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayBallotComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBallotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
