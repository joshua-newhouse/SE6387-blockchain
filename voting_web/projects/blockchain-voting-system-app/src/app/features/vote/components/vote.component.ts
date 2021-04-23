import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';

import {TranslateService} from '@ngx-translate/core';
import {NotificationService, ROUTE_ANIMATIONS_ELEMENTS} from '../../../core/core.module';
import {
  Ballot,
  BallotStepState,
  Candidate,
  QuestionBase,
  RaceCandidate,
  RegisterStepState,
  VoteResult
} from '../vote.model';
import {VoteService} from '../vote.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'bvs-form',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  isEditable = true;
  isAuthenticateComplete: boolean;
  isBallotSelectionComplete: boolean;
  isBallotReviewComplete: boolean;
  isAcknowledgementComplete: boolean;

  ballot$ = new BehaviorSubject<Ballot>(null);
  raceQuestions$ = new BehaviorSubject<QuestionBase<Candidate>[]>([]);
  selectedRaces$ = new BehaviorSubject<RaceCandidate[]>([]);
  voteResult$ = new BehaviorSubject<VoteResult>(null);

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private translate: TranslateService,
    private notificationService: NotificationService,
    private voteService: VoteService
  ) {
    this.isAuthenticateComplete = false;
    this.isBallotSelectionComplete = false;
    this.isBallotReviewComplete = false;
    this.isAcknowledgementComplete = false;
  }

  ngOnInit() {
  }

  reset() {
  }

  stepSelectionChanged($event: StepperSelectionEvent) {
    if ($event.selectedStep.label === 'Acknowledgement') {
      this.isEditable = false;
    }
  }

  onRegistered(state: RegisterStepState) {
    this.isAuthenticateComplete = state.isComplete;
    this.ballot$.next(state.ballot);
    this.voteService.getRaceQuestions(state.ballot).subscribe(value => {
      this.raceQuestions$.next(value);
    });
  }

  onRacesSelected(state: BallotStepState) {
    this.isBallotSelectionComplete = state.isComplete;
    this.selectedRaces$.next(state.raceCandidates);
  }


  onBallotReviewed(result: VoteResult) {
    this.isBallotReviewComplete = true;
    this.voteResult$.next(result)
  }
}
