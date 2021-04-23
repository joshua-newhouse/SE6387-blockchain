import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { TrackComponent } from './components/track.component';
import { TrackRoutingModule } from './track-routing.module';

@NgModule({
  declarations: [TrackComponent],
  imports: [CommonModule, SharedModule, TrackRoutingModule]
})
export class TrackModule {}
