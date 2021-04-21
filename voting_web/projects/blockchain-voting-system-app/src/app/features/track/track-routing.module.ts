import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackComponent } from './components/track.component';

const routes: Routes = [
  {
    path: '',
    component: TrackComponent,
    data: { title: 'bvs.menu.vote' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackRoutingModule {}
