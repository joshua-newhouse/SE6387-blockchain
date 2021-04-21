import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { TranslateService } from '@ngx-translate/core';
import {
  NotificationService,
  ROUTE_ANIMATIONS_ELEMENTS
} from '../../../core/core.module';

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

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private translate: TranslateService,
    private notificationService: NotificationService
  ) {
    this.isAuthenticateComplete = true;
    this.isBallotSelectionComplete = true;
    this.isBallotReviewComplete = true;
    this.isAcknowledgementComplete = true;
  }

  ngOnInit() {}

  reset() {}

  stepSelectionChanged($event: StepperSelectionEvent) {
    if ($event.selectedStep.label === 'Acknowledgement') {
      this.isEditable = false;
    }
  }
}
