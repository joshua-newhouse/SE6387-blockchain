import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bvs-acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcknowledgementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
