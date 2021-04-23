import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {VoteResult} from '../../../vote.model';

@Component({
  selector: 'bvs-acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcknowledgementComponent implements OnInit {

  @Input() voteResult$: BehaviorSubject<VoteResult>;

  isReady = new BehaviorSubject<boolean>(false);
  confirmationId: string;

  constructor() {
    this.confirmationId = '';
  }

  ngOnInit(): void {
    this.voteResult$.subscribe(value => {
      if (value) {
        this.confirmationId = value.confirmationId;
        this.isReady.next(true);
      }
    })
  }
}
