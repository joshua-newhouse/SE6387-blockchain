import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'bvs-feature-list',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  ngOnInit() {}

  openLink(link: string) {}
}
