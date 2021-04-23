import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BallotStepState, Candidate, QuestionBase} from '../../../vote.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {VoteService} from '../../../vote.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'bvs-display-ballot',
  templateUrl: './display-ballot.component.html',
  styleUrls: ['./display-ballot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayBallotComponent implements OnInit {

  @Input() raceQuestions$: BehaviorSubject<QuestionBase<Candidate>[]>;

  @Output() racesSelected = new EventEmitter<BallotStepState>();

  raceQuestions: QuestionBase<Candidate>[];

  form: FormGroup;

  isReady = new BehaviorSubject<boolean>(false);

  constructor(private fb: FormBuilder, private voteService: VoteService) {

  }

  ngOnInit(): void {
    this.raceQuestions$.subscribe(data => {
      if (data.length) {
        this.form = this.voteService.toFormGroup(data);
        this.raceQuestions = data;
        this.isReady.next(true);
      }
    });
  }

  next() {
    this.form.markAllAsTouched();
    const rawValue = this.form.getRawValue();
    if (this.form.valid) {

      const data = [];
      Object.keys(rawValue).forEach(key => {
        data.push({
          race: key,
          candidate: rawValue[key]
        })
      });

      this.racesSelected.emit({
        isComplete: true,
        raceCandidates: data
      });
    }
  }
}
