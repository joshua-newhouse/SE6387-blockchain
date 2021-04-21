import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bvs-display-ballot',
  templateUrl: './display-ballot.component.html',
  styleUrls: ['./display-ballot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayBallotComponent implements OnInit {
  favoriteCandidate: string;
  candidates: string[] = ['Manohar', 'Vamsi'];

  constructor() {}

  ngOnInit(): void {}

  next() {}
}
