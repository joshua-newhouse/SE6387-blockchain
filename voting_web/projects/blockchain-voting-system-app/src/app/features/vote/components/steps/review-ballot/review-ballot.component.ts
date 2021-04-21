import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bvs-review-ballot',
  templateUrl: './review-ballot.component.html',
  styleUrls: ['./review-ballot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewBallotComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  next() {}
}
