import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Ballot, Race, RaceCandidate, VoteResult} from '../../../vote.model';
import {VoteService} from '../../../vote.service';

@Component({
  selector: 'bvs-review-ballot',
  templateUrl: './review-ballot.component.html',
  styleUrls: ['./review-ballot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewBallotComponent implements OnInit {

  @Input() ballot$: BehaviorSubject<Ballot>;
  @Input() raceCandidates$: BehaviorSubject<RaceCandidate[]>;
  @Output() ballotReviewed = new EventEmitter<VoteResult>();

  ballot: Ballot;
  raceCandidates: RaceCandidate[];
  isReady = new BehaviorSubject<boolean>(false);

  constructor(private voteService: VoteService) {
  }

  ngOnInit(): void {
    this.ballot$.subscribe(value => {
      this.ballot = value;
    });
    this.raceCandidates$.subscribe(value => {
      if (value.length > 0) {
        this.raceCandidates = value;
        this.isReady.next(true);
      }
    });

  }

  next() {

    const races: Race[] = [];

    this.raceCandidates.forEach(value => {
      races.push({
        raceName: value.race,
        candidates: [value.candidate]
      });
    });

    this.voteService.submitVote({
      header: this.ballot.header,
      races: races
    }).subscribe(value => {
      if (value) {
        this.ballotReviewed.emit(value);
      }
    });
    ;
  }
}
